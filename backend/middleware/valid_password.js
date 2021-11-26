const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'le mot de passe doit contenir au minimum 8 caractères, 1 chiffre, une lettre majuscule et minuscule sans espace'});
    } else {
        next();
    }
};