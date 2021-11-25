const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

router.get('/:id',  commentCtrl.getAllComment);
router.post('/',  commentCtrl.createComment);
// router.get('/:id',  postCtrl.getOnePost);
// router.put('/:id',  postCtrl.modifyPost);
// router.delete('/:id', postCtrl.deletePost);

module.exports = router;