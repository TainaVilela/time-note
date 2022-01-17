import Sequelize from "sequelize";
//import dotenv from 'dotenv'
//dotenv.config()

const sequelize = new Sequelize("injetaq", "hoot", "admin", {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    }
})

export default sequelize