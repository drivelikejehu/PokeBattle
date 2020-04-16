const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/pokemon", function (req, res) {
  db.Pokemon.findAll()
    .then((pokemons) => {
      console.log(pokemons);
      res.render("all-pokemon", { pokemons });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/users", function (req, res) {
  db.User.findAll()
    .then((pokemons) => {
      console.log(pokemons);
      res.render("all-users", { users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/pokemon", function (req, res) {
  db.Pokemon.findAll()
    .then((pokemons) => {
      console.log(pokemons);
      res.json(pokemons);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/pokemon/:id", function (req, res) {
  db.Lego.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((pokemons) => {
      console.log(pokemons);
      res.json(pokemons);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});
module.exports = router;