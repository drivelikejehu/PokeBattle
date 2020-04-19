module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING,
    pokemonName: DataTypes.STRING,
    xp: DataTypes.INTEGER,
    image: DataTypes.STRING,
<<<<<<< HEAD
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
=======
    winner: DataTypes.BOOLEAN,
>>>>>>> a6dd5e57d134fbdb8f8897e3d5d689eaed0c09f9
  });
  User.associate = function(models) {
    User.hasMany(models.Pokemon, {
    });
  };
  return User;

};