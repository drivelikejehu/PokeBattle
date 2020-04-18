module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING,
    pokemonName: DataTypes.STRING,
    // imageUrl: DataTypes.STRING,
  });
  User.associate = function(models) {
    User.hasMany(models.Pokemon, {
    });
  };
  return User;

};