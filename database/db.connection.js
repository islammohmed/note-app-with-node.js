import { Sequelize , DataTypes } from "sequelize";
export const sequelize = new Sequelize('assigment5', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
export default DataTypes;