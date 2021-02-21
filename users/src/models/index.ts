import { ModelCtor } from 'sequelize';
import { User, initUser } from './user.model';
import { Interest, initInterests } from './interest.model';
import { Friend, initFriend } from './friend.model';
import { sequelize } from '../db';


interface dbModel {
    User: ModelCtor<User>,
    Friend: ModelCtor<Friend>,
    Interest: ModelCtor<Interest>,
}

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