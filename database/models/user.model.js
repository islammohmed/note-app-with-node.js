import {sequelize} from './../db.connection.js';
import DataTypes from './../db.connection.js'
import noteModel from './note.model.js';
const userModel = sequelize.define('user',{
    id :{
        type : DataTypes.INTEGER,
        autoIncrement :true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email :{
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    age : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }

})
userModel.hasMany(noteModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
noteModel.belongsTo(userModel);
export default userModel;