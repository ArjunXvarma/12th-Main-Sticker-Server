const express = require("express");
const sequelize = require("./config/sql");

const app = express();

app.use(express.json());

module.exports = app;
