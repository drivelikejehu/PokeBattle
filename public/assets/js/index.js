$(document).ready(function() {
  $(document).foundation();
  console.log("Hello World!");
  $("#generate-second-page").on("click", function() {
    location.href = "/pokemon";
    return false;
  });
  //event listeners and ajax calls
});