
const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./config/database");

require("./models/Order");
require("./models/Item");

const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(bodyParser.json());

app.use(orderRoutes);

sequelize.sync().then(() => {
  console.log("Database connected");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
