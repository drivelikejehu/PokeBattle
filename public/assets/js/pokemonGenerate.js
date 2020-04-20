//upon page load- first containers will dynamically generate
var userOneset = false;
var userTwoset = false;
var firstInput = true;
var firstPokeball;

$(document).ready(function() {

  function getCardSectionsToGeneratePokemon() {
    const generateCardSectionsOne = $(`<h4>Player 1:</h4>
    <div class="form">
  <input id="input-userOne" type="text" name="pokeUserNameOne"> </div>
  <img alt="pokemon ball" type="button" src="/assets/img/pokemon-ball.png" class="pokeBall" id="userOne"></img>
  `);
    const generateCardSectionsTwo = $(`<h4>Player 2:</h4>
    <div class="form">
  <input id="input-userTwo" type="text" name="pokeUserNameTwo"> </div>
  <img alt="pokemon ball" type="button" src="/assets/img/pokemon-ball.png" class="pokeBall" id="userTwo"></img>
  `);
      //append to card-sections
    $("#card-userOne").append(generateCardSectionsOne);
    $("#card-userTwo").append(generateCardSectionsTwo);

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

  function saveAndgeneratePokemon(user) {
    console.log(user);
    username = $("#input-" + user).val();
    console.log(username);
    var randomNum = Math.floor(Math.random() * 150) + 1;
    console.log(randomNum);
    let pokeSearch = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
    console.log(pokeSearch);
    //saves pokemon,usename, xp, and image url in mysql
    $.ajax({
      url: pokeSearch,
      method: "GET"
    }).then(function(response) {
      var pokeBall = {
        userName: username,
        pokemonName: response.name,
        xp: response.base_experience,
        image: response.sprites.front_shiny,
        winner: false
      };

      // pokeBall.winnner= true;
      if(firstInput) {
        firstInput = false;
        firstPokeball = pokeBall;
        console.log(firstPokeball);
      } else {

        firstPokeball.xp > pokeBall.xp ? firstPokeball.winner = true : pokeBall.winner = true;

        postUser(firstPokeball);
        postUser(pokeBall);

      }

      //card will empty by card id
      $("#card-" + user).empty();
      //pokemon each user got will be dynamically created and appeneded yo card
      const userPokemon = `<h3>${pokeBall.pokemonName}</h3><img src=${pokeBall.image} ></img>`;
      $("#card-" + user).append(userPokemon);


    });

  }

  getCardSectionsToGeneratePokemon();

  function saveUserNameAndGeneratePokemon() {

  // on click function that saves input from userone
    $("#userOne").on("click",function() {
      saveAndgeneratePokemon(this.id);
      userOneset = true;
    });
    // on click function that saves input from usertwo
    $("#userTwo").on("click",function() {
      saveAndgeneratePokemon(this.id);
      userTwoset = true;
    });

    $("#goResultsPage").on("click",function() {
      // conditional that checks both users have generated a pokemon
      if (userOneset && userTwoset) {
        window.location.replace("/results");
      } else {
        const selectText = $("<h1>MUST SELECT A POKEMON</h1>");
        $("#submit-block").append(selectText);

      }
    });

  }

  saveUserNameAndGeneratePokemon();
});








