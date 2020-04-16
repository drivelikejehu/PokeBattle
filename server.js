const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();


const db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("index");
});


db.sequelize.sync({force:true}).then(function () {
  app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});