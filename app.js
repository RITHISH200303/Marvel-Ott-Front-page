const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/all_categary", function (req, res) {
  res.render("view_all");
});

app.listen(3000);
