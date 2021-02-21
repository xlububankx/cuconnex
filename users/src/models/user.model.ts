
import { Model, DataTypes, BelongsToManyGetAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyAddAssociationMixin, HasManyGetAssociationsMixin, HasManyCreateAssociationMixin, Association, Sequelize, } from 'sequelize'
import { Interest, InterestCreationAttrs } from './interest.model'
import { FriendStatus } from '@cuconnex/common';
import sequelize from 'sequelize';




// All attributes in user model
interface UserAttrs {
    id: string;
    name: string;
    interest?: Array<any>
    friends?: User[];
}

interface UserCreationAttrs {
    id: string,
    name: string;
}


class User extends Model<UserAttrs, UserCreationAttrs> implements UserAttrs {
    public id!: string;
    public name!: string;
    public interest?: any;
    public friends?: User[];

    public createInt!: HasManyCreateAssociationMixin<Interest>
    public getInterests!: HasManyGetAssociationsMixin<Interest>
    public createUser!: BelongsToManyCreateAssociationMixin<User>
    public addFriend!: BelongsToManyAddAssociationMixin<User, FriendStatus>
    public getFriend!: BelongsToManyGetAssociationsMixin<User>;

    public createInterests(attrs: InterestCreationAttrs) {
        return this.createInt({ description: attrs.description });
    }

    public async createInterestsFromArray(interests: InterestCreationAttrs[]) {
        for (let interest of interests) {
            await this.createInterests(interest)
        }
    }



    public static associations: {
        interests: Association<User, Interest>;
        friend: Association<User, User>;
    }
}


const initUser = (sequelize: Sequelize) => sequelize.define<User, UserAttrs>('users', {
    id: {
        type: DataTypes.STRING(11),
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(255),
        allowNull: false
    }
})



export { User, initUser }