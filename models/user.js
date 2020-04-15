module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING,
    pokemonName: DataTypes.STRING,
    // image: DataTypes.STRING,
  });
  return User;

};