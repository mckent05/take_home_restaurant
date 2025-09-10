const { Pool } = require("pg")
const pool = new Pool({
  host: "db",
  port: 5432,
  user: "tope",
  password: "tope",
  database: "locate_restuarant"
})

module.exports = pool