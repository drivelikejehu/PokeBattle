 // event listeners and ajax calls
  // Upon clicking the pokeball on the pokemonGenerate page, this page will dynamically generate the winner of the battle
  // Must compare the XP parameter of the two Pokemon and see which one is higher - that Pokemon will win
  // obtain users' win and loss data from MySQL database and increase their win or loss count by 1 each
  // GET route to pokemon_db.Users
  var Pokemon = require("../models/pokemon.js");
  var User = require("../models/user.js");

  $(document).ready(function() {

 
  module.exports = function(app){
 
  app.get("/pokemon", function (req, res) {
    // comparePokemonXP();
    // set variables to get both pokemon's XP values
  var pokemonOneXP = $("#userOne").pokeBall.xp;
  var pokemonTwoXP = $("#userTwo").pokeBall.xp;

    if (pokemonOneXP > pokemonTwoXP) {
      Pokemon.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else if (pokemonTwoXP > pokemonOneXP) {
      Pokemon.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

   function comparePokemonXP(){
    // set conditionals to compare XP values
    if (pokemonOneXP > pokemonTwoXP) {
      $("#winnerName").append("testUser1");
    } else if (pokemonTwoXP > pokemonOneXP) {
      $("#winnerName").append("testUser2");
    }
   }

  app.post("/pokemon", function (req, res) {
    // // Take the request...
    // var character = req.body;
    // // Create a routeName
    // // Using a RegEx Pattern to remove spaces from character.name
    // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // var routeName = character.name.replace(/\s+/g, "").toLowerCase();
    // // Then add the character to the database using sequelize
    // Character.create({
    //   routeName: routeName,
    //   name: character.name,
    //   role: character.role,
    //   age: character.age,
    //   forcePoints: character.forcePoints
    // });
    // res.status(204).end();
  });
  };
});