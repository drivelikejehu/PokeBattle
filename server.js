const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();


const db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const pokemonGenerateRoutes = require("./controllers/pokemonGenerateController.js");
const resultsRoutes = require("./controllers/resultsControllers.js");

app.use(pokemonGenerateRoutes);
app.use(resultsRoutes);

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/api/config", function (req, res) {
  res.json({
    success: true,
  });
});


db.sequelize.sync({ force:true }).then(function () {
  app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});