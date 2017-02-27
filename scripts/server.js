const express = require("express");
const path    = require("path");
const open    = require("open");
const chalk   = require("chalk");


const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(PORT, (err) => {
  if(err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Server running on port: " + PORT));
    open("http://localhost:" + PORT);
  }
});
