const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/pokemon", function (req, res) {
  db.Pokemon.findAll()
    .then((pokemons) => {
      console.log(pokemons);
      res.render("pokemonGenerate", { pokemons });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

<<<<<<< HEAD
router.get("/api/pokemon", function (req, res) {
  db.Pokemon.findAll()
    .then((pokemons) => {
      console.log(pokemons);
      res.json(pokemons);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
=======


// route for on click function that saves input from user aka username
router.post("/api/user", function(req, res) {
  const newUser = {
    userName: req.body.userName,
  };
  db.User.create(newUser)
    .then((newUser) => {
      console.log(newUser);
>>>>>>> 1f40b460e8bda2dd9ae614d80557b5ff72793e29
      res.json({
        message: "Successfully created new user",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});



module.exports = router;