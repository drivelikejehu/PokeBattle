//upon page load- first containers will dynamically generate
$(document).ready(function () {
  console.log("Hello World!");

  function getCardSections() {
    const generateCardOne = $(`<h4>Username</h4>
    <div class="form">
  <input id="inputUsernameOne" type="text" name="pokeUserNameOne" placeholder="Enter Trainer Name"> </div>
  <img alt="pokemon ball" src="/assets/img/pokemon-ball.png" class="pokeBall" id="pokemonBallOne">
  `);
    const generateCardTwo = $(`<h4>Username</h4>
    <div class="form">
  <input id="inputUsernameTwo" type="text" name="pokeUserNameTwo" placeholder="Enter Trainer Name"> </div>
  <img alt="pokemon ball" src="/assets/img/pokemon-ball.png" class="pokeBall" id="pokemonBallTwo">
  `);
    //append to card-sections
    $("#card-user-One").append(generateCardOne);
    $("#card-user-Two").append(generateCardTwo);
  }
  getCardSections();

  // on click function that saves input from user aka username

  $("#pokemonBallOne").on("click", () => {
    // const pokeBallOne = {
    //   userName: $("#inputUsernameOne").val(),
    // };

    // var pokeID = "1";
    const queryURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then((response) => {
      const pokeName = response.results[0].name;
      // console.log(pokeName);
      const pokeQuery = response.results[0].url;
      // console.log(pokeQuery);

      $.ajax({
        url: pokeQuery,
        method: "GET",
      }).then((res) => {
        console.log(res);
        console.log(res.id);
        const pokePng = res.sprites.front_default;

        const generatePokeCardOne = $(`<h4>${pokeName}</h4>
    <div class="form">
  <img alt="pokemon ball" src="${pokePng}" class="pokeBall" id="pokemonBallOne">
  `);

        $("#card-user-One").append(generatePokeCardOne);
      });
    });
  });
});

// function saveUserNameAndGeneratePokemon() {
//   console.log($("#pokemonBallOne"));
//   $("#pokemonBallOne").on("click", function () {
//     var pokeBallOne = {
//       userName: $("#inputUsernameOne").val(),
//     };
//     console.log(pokeBallOne);
//     $.ajax("/api/user", {
//       type: "POST",
//       data: pokeBallOne,
//     }).then(function () {
//       console.log("done!");
//     });
//   });
// }
// saveUserNameAndGeneratePokemon();
// });

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
