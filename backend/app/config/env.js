require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  API_KEY: process.env.API_KEY || "default-api-key",
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "password",
  DB_NAME: process.env.DB_NAME || "12th_main_stickers",
  MONGODB_URL: process.env.MONGODB_URL || "12th-main-stickers",
};
