module.exports = function(sequelize, DataTypes) {
  var Pokemon = sequelize.define("Pokemon", {
    pokemonName: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  Pokemon.belongsTo = function(models) {
    Pokemon.belongsTo(models.User, {
      foreignKey: {
        // foreignKey: "userId",
        allowNull: false
      }
    });
  };

  return Pokemon;

};