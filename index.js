const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ version: "1.0.0" });
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
