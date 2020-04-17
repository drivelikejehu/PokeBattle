//upon page load- first containers will dynamically generate
$(document).ready(function() {
  console.log("Hello World!");

  function getCardSectionsToGeneratePokemon() {
    const generateCardSectionsOne = $(`<h4>Username</h4>
  <input id="inputUsernameOne" type="text">
  <a href="/pokemon"><img alt="pokemon ball" type="submit" src="/assets/img/pokemon-ball.png" id="pokemonBallOne"></img></a>`);

    const generateCardSectionsTwo = $(`<h4>Username</h4>
  <input id="inputUsernameTwo" type="text">
  <a href="/pokemon"><img alt="pokemon ball" type="submit" src="/assets/img/pokemon-ball.png" id="pokemonBallTwo"></img></a>`);
      //append to card-sections
    $("#card-user-One").append(generateCardSectionsOne);
    $("#card-user-Two").append(generateCardSectionsTwo);

  }
  getCardSectionsToGeneratePokemon();
});

// on click function that saves input from user aka username
$(function () {
 
  $("#pokemonBallOne").on("submit", function(){
    const pokeBallOne = {
      userName: $("#inputUsernameOne").val()
    };
    console.log("here");
    console.log(pokeBallOne);


  });
});





//as well as randomly selects pokemon from ajax call math.random and
//saves pokemon along with type and username in mysql

//this ^^ will be done twice & seperatly. One for user 1 and one for user 2
//upon the click that generates and saves user/pokemon info, card will empty by card id
//and a 'You got ${pokemon}!' with type and picture of pokemon will be dynamically created

//write conditional that checks both users have generated a pokemon
//if both users have generated a pokemon/info saved,
//then a submit button will be dynammically generated
//upon submit- a query will run to compare types of pokemon(need to write conditionals as to
//what pokemon type beats what). *if type=type, then math.random to decide
//user will be direced to results page which will display that user/pokemon that won
//info will be saved to mysql(done in resultsController file)
