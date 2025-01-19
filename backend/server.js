const app = require("./app/app");
const { PORT } = require("./app/config/env");
const sequelize = require("./app/config/sql");
const connectDB = require("./app/config/mongodb.js");

connectDB();

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
