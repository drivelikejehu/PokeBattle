//upon page load- a query will run to compare xp of pokemonfrom last two users
//write function and conditional say higher xp will win
//win/loss info will be saved to mysql
//table to display all users and win/loss
$(document).ready(function() {

  function getLastTwoUsers() {
    $.ajax("/battle", {
      type: "GET",
    }).then(
      function(){
        console.log("done!");
      }
    );
  }
  getLastTwoUsers();

});