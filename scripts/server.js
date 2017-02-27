const express = require("express");
const path    = require("path");
const open    = require("open");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(PORT, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("Server running on port: " + PORT);
    open("http://localhost:" + PORT);
  }
});
