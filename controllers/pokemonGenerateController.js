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

router.post("/api/user", function(req, res) {
  const newUser = {
    userName: req.body.userName,
    pokemonName:req.body.pokemonName,
    xp: req.body.xp,
    image:req.body.image,
    winner:req.body.winner
  };
  db.User.create(newUser)
    .then((newUser) => {
      console.log(newUser);
      res.json({
        message: "Successfully created new user",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.post("/api/pokemon", function(req, res) {
//   const newPokemon = {
//     pokemonName: req.body.pokemonName,
//     xp: req.body.xp,
//     image: req.body.image,
//   };
//   db.User.create(newPokemon)
//     .then((newPokemon) => {
//       console.log(newPokemon);
//       res.json({
//         message: "Successfully created new user",
//         success: true,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });



module.exports = router;