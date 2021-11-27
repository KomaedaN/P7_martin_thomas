const express = require('express');
const router = express.Router();

const valid_password = require('../middleware/valid_password');
const userCtrl = require('../controllers/user');

router.post('/signup', valid_password, userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/members',userCtrl.getAllUsers);
router.get('/profil/:id', userCtrl.getUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;