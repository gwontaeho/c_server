require("dotenv").config();
const express = require("express");
const routers = require("./routers");

const app = express();

app.use("/", routers);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
