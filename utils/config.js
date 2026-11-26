require("dotenv").config();

const MANGOOSE_DB_URI = process.env.MANGOOSE_DB_URI;
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const JWT_SCERET = process.env.JWT_SCERET;
const NODE_ENV = process.env.NODE_ENV;



module.exports = {
  MANGOOSE_DB_URI,
  PORT,
  HOST,
  JWT_SCERET,
  NODE_ENV
};