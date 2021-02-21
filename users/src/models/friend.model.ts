import { Sequelize, Model, DataTypes } from 'sequelize'
import { FriendStatus } from '@cuconnex/common'



interface FriendAttrs {
    senderId: string;
    receiverId: string;
    status: FriendStatus;
}


interface FriendCreationAttrs {

}

class Friend extends Model<FriendAttrs, FriendCreationAttrs> implements FriendAttrs {
    public senderId!: string;
    public receiverId!: string;
    public status!: FriendStatus;
}



const initFriend = (sequelize: Sequelize) => sequelize.define<Friend, FriendAttrs>('friends', {
    senderId: {
        type: DataTypes.STRING(11),
        primaryKey: true
    },
    receiverId: {
        type: DataTypes.STRING(11),
        primaryKey: true
    },
    status: {
        type: DataTypes.ENUM,
        values: Object.values(FriendStatus),
        defaultValue: FriendStatus.Pending
    }
})

export { Friend, initFriend };
