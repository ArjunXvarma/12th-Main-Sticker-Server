require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  API_KEY: process.env.API_KEY || "default-api-key",
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_USER: process.env.DB_USER || "12th-main-stickers",
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DA_NAME || "sticker-server",
};
