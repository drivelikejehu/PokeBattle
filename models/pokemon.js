module.exports = function(sequelize, DataTypes) {
  var Pokemon = sequelize.define("Pokemon", {
    pokemonName: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  return Pokemon;

};