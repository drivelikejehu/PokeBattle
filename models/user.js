module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING,
    pokemonName: DataTypes.STRING,
    // image: DataTypes.STRING,
  });
  User.associate = function(models) {
    User.hasMany(models.Pokemon, {
    });
  };

  return User;

};