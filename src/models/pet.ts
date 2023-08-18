import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/sqlite';
export interface PetInstance extends Model {
    type: string,
    image: string,
    name: string,
    color: string,
    sex: string,
}

export const Pet = sequelize.define<PetInstance>("Pets",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    pet_type: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    sex: {
        type: DataTypes.STRING
    }
},{
    tableName: 'pets',
    timestamps: false
});