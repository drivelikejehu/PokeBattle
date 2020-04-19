//upon page load- a query will run to compare xp of pokemonfrom last two users
//write function and conditional say higher xp will win
//win/loss info will be saved to mysql
//table to display all users and win/loss
$(document).ready(function() {

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


    }
    );
  }

  getLastWinner();

});