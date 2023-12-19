import {sequelize} from './../db.connection.js';
import DataTypes from './../db.connection.js'
import userModel from './user.model.js';
const noteModel = sequelize.define('note',{
    id : {
        type : DataTypes.INTEGER ,
        autoIncrement :true,
        primaryKey : true    
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    content : {
        type : DataTypes.STRING,
        allowNull : false
    },
    userId : {
        type : DataTypes.INTEGER,
        allowNull: false
    }
})


export default noteModel