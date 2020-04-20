<<<<<<< HEAD
// event listeners and ajax calls
// Upon clicking the pokeball on the pokemonGenerate page, this page will dynamically generate the winner of the battle
// Must compare the XP parameter of the two Pokemon and see which one is higher - that Pokemon will win
// obtain users' win and loss data from MySQL database and increase their win or loss count by 1 each
// GET route to pokemon_db.Users
var Pokemon = require("../models/pokemon.js");
var User = require("../models/user.js");

$(document).ready(function () {
  module.exports = function (app) {
    app.get("/pokemon", function (req, res) {
      // comparePokemonXP();
      // set variables to get both pokemon's XP values
      var pokemonOneXP = $("#userOne").pokeBall.xp;
      var pokemonTwoXP = $("#userTwo").pokeBall.xp;

      if (pokemonOneXP > pokemonTwoXP) {
        Pokemon.findOne({
          where: {
            routeName: req.params.characters,
          },
        }).then(function (result) {
          return res.json(result);
        });
      } else if (pokemonTwoXP > pokemonOneXP) {
        Pokemon.findAll().then(function (result) {
          return res.json(result);
        });
      }
    });

    function comparePokemonXP() {
      // set conditionals to compare XP values
      if (pokemonOneXP > pokemonTwoXP) {
        $("#winnerName").append("testUser1");
      } else if (pokemonTwoXP > pokemonOneXP) {
        $("#winnerName").append("testUser2");
      }
    }

    comparePokemonXP()

    console.log(comparePokemonXP);

    // app.post("/pokemon", function (req, res) {
    //   console.log(comparePokemonXP)

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
  };
});
=======
//upon page load- a query will run to compare xp of pokemonfrom last two users
//write function and conditional say higher xp will win
//win/loss info will be saved to mysql
//table to display all users and win/loss
$(document).ready(function() {

  function getHighScore(userName) {
    $.ajax({
      method: "GET",
      url: "/highscore?name=" + userName

    }).then(result =>{

      console.log(result);
      console.log(result.count);
      $("#userHighScore").append(userName + " has won " + result.count + " times!");

    }
    );
  }
  function getLastWinner() {
    $.ajax({
      method: "GET",
      url: "/battle"
    }).done(result =>{
      console.log(result);

      $("#userWhoWon").append(result[0].userName);
      const pokemonImage = $(`
    <img  src="${result[0].image}"></img>
    `);
      $("#winningPokemon").append(pokemonImage);

      getHighScore(result[0].userName);

    }
    );
  }


  getLastWinner();

});
>>>>>>> a6dd5e57d134fbdb8f8897e3d5d689eaed0c09f9
