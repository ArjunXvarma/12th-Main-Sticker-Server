const app = require("./app/app");
const { PORT } = require("./app/config/env");

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
