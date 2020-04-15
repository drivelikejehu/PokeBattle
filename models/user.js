module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // id: {
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: DataTypes.INTEGER
    // },
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