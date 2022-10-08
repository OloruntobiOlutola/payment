const mongoose = require("mongoose");
const { DB_URL } = process.env;

mongoose
  .connect(DB_URL)
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error));

module.exports = { mongoose };
