const db = require("../models/commentSequelize");
const Comment = db.comment; 

exports.createComment = (req, res, next) => {
  const comment = {
    content: req.body.content,
    post_id: req.header.post_id,
    user_id: req.header.user_id
  };
  
  Comment.create(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Post."
      });
    });
};
  


// Delete a Post with the specified id in the request
exports.deletePost = (req, res) => {
  const id = req.params.id;

  Post.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id
      });
    });
};

// find all published Post
exports.getAllComment = (req, res) => {
  Comment.findAll({where: {
    post_id: req.params.id,
  }})    
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Posts."
      });
    });
};

