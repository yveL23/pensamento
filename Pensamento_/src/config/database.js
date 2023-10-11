const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true
    }
}