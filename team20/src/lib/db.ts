import mysql from 'mysql2'
require('dotenv').config()

export const db = mysql.createConnection({
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});