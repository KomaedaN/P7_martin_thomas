module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      content: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.NUMBER
      },
      post_id: {
        type: Sequelize.NUMBER
      }
    });
  
    return Comment;
  };