//upon page load- first containers will dynamically generate

var userOneset = false;
var userTwoset = false;

$(document).ready(function() {
  console.log("Hello World!");

  function getCardSectionsToGeneratePokemon() {
    const generateCardSectionsOne = $(`<h4>Player 1:</h4>
    <div class="form">
  <input id="inputpokemonBallOne" type="text" name="pokeUserNameOne"> </div>
  <img alt="pokemon ball" type="button" src="/assets/img/pokemon-ball.png" class="pokeBall" id="pokemonBallOne"></img>
  `);
    const generateCardSectionsTwo = $(`<h4>Player 2:</h4>
    <div class="form">
  <input id="inputpokemonBallTwo" type="text" name="pokeUserNameTwo"> </div>
  <img alt="pokemon ball" type="button" src="/assets/img/pokemon-ball.png" class="pokeBall" id="pokemonBallTwo"></img>
  `);
      //append to card-sections
    $("#card-user-One").append(generateCardSectionsOne);
    $("#card-user-Two").append(generateCardSectionsTwo);

  }


  function postUser(pokeBall) {
    $.ajax("/api/user", {
      type: "POST",
      data: pokeBall
    }).then(
      function(){
        console.log("done!");
      }
    );
  }

  function saveAndgeneratePokemon(username) {
    var randomNum = Math.floor(Math.random() * 150) + 1;
    console.log(randomNum);
    let pokeSearch = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
    console.log(pokeSearch);

    $.ajax({
      url: pokeSearch,
      method: "GET"
    }).then(function(response) {
      var pokeBallOne = {
        userName: username,
        pokemonName: response.name,
        xp: response.base_experience,
        image: response.sprites.front_shiny
      };

      postUser(pokeBallOne);
    });

  }


  getCardSectionsToGeneratePokemon();
  // on click function that saves input from user aka username
  function saveUserNameAndGeneratePokemon() {


    $("#pokemonBallOne").on("click",function() {
      saveAndgeneratePokemon($("#input" + this.id).val());
      userOneset = true;

      $( "#card-user-One" ).empty();

    });

    $("#pokemonBallTwo").on("click",function() {
      saveAndgeneratePokemon($("#input" + this.id).val());
      userTwoset = true;
      $( "#card-user-Two" ).empty();
      
    });

  }










  saveUserNameAndGeneratePokemon();
});



//saves pokemon along with type and username in mysql
//upon the click that generates and saves user/pokemon info, card will empty by card id
//and a 'You got ${pokemon}!' with type and picture of pokemon will be dynamically created
//this ^^ will be done twice & seperatly. One for user 1 and one for user 2


//write conditional that checks both users have generated a pokemon
//if both users have generated a pokemon/info saved,
//then a submit button will be dynammically generated
//upon submit- a query will run to compare types of pokemon(need to write conditionals as to
//what pokemon type beats what). *if type=type, then math.random to decide
//user will be direced to results page which will display that user/pokemon that won
//info will be saved to mysql(done in resultsController file)
