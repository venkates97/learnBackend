require("dotenv").config();

const MANGOOSE_DB_URI = process.env.MANGOOSE_DB_URI;
const PORT = process.env.PORT;
const HOST = process.env.HOST;


module.exports = {
  MANGOOSE_DB_URI,
  PORT,
  HOST
};