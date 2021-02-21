import { FriendStatus } from '@cuconnex/common';
import { app } from './app'
import { sequelize, initializeDB } from './db'
import { User } from './models/user.model';


const validateEnvAttr = () => {

    if (!process.env.DB_HOST) {
        throw new Error('DB_HOST must be defined');
    }

    if (!process.env.DB_USER) {
        throw new Error('DB_USER must be defined');
    }

    if (!process.env.DB_USER) {
        throw new Error('DB_USER must be defined');
    }

    if (!process.env.DB_SCHEMA) {
        throw new Error('DB_SCHEMA must be defined');
    }

    if (!process.env.DB_SCHEMA) {
        throw new Error('DB_SCHEMA must be defined');
    }

    if (!process.env.DB_PASSWORD) {
        throw new Error('DB_PASSWORD must be defined');
    }

}



const start = async () => {


    try {
        // check if all required env variable have been declared
        validateEnvAttr();

        // create Database if not exist
        await initializeDB();

        // define db relation

        // 
        await sequelize.sync()

        // const db = await initializeDB();
        // const user = await User.create({ id: "6131886621", name: "pal" });
        // const user2 = await User.create({ id: "6131797921", name: "bob" });
        // const user3 = await User.create({ id: "6131797ass", name: "alice" });

        // await user.addFriend(user2, { through: { status: FriendStatus.Accept } });
        // await user.addFriend(user3);

        // console.log(await db.Friend!.findAll())
        // console.log(f);
        // console.log(typeof User.associations.receiver.as)

    } catch (err) {
        console.error(err);
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000..')
    })

}



start();