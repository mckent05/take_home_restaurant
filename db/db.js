const { Pool } = require("pg");
const dotenv = require('dotenv')
dotenv.config()

const pool = new Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: 'postgres',
  password: 'postgres',
  database: process.env.DATABASE,
});

module.exports = pool;
