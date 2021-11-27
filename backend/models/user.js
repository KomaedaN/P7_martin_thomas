module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    isAdmin: {
      type: Sequelize.INTEGER
    }
  });

  return User;
};