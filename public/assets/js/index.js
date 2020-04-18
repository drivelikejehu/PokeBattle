$(document).ready(() => {
  $(document).foundation();
  console.log("Hello World!");
  $("#pokeball").on("click", () => {
    location.href = "/pokemon";
    return false;
  });
});
