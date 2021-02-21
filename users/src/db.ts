import { ModelCtor, Sequelize } from 'sequelize';
import config from './config/db.config';
import mysql, { Connection } from 'mysql2/promise';
import { User, initUser } from './models/user.model';
import { Interest, initInterests } from './models/interest.model';
import { Friend, initFriend } from './models/friend.model';



interface myDB {
    sequelize: Sequelize
    connection: Connection
    Friend?: ModelCtor<any>;
}

interface dbModel {
    User: ModelCtor<User>,
    Friend: ModelCtor<Friend>,
    Interest: ModelCtor<Interest>,
}


const { host, db: database, user, password } = config;

// create database if not exist
export const initializeDB = async () => {
    const connection = await mysql.createConnection({ host: host, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
}



export const sequelize = new Sequelize(database, user, password, { dialect: 'mysql', host, logging: false });


// initialize db model 
export const db: dbModel = {
    User: initUser(sequelize),
    Interest: initInterests(sequelize),
    Friend: initFriend(sequelize),
}


// define table's relation
export const initRelation = () => {
    db.User.hasMany(db.Interest, { sourceKey: "id", foreignKey: "userId", as: "interests", onDelete: 'CASCADE' });
    db.User.belongsToMany(db.User, { as: "friend", through: db.Friend, foreignKey: "senderId", otherKey: "receiverId" });
}


// close connection to db
export const endDB = async (db: myDB) => {
    if (db.sequelize) {
        await db.sequelize.close();
    }
    if (db.connection) {
        await db.connection.end();
    }
}
