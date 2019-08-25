const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('./../config');

const userSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
});

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

const generateJWT = function(user) {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    return jwt.sign({
        username: user.username,
        id: user._id
    }, config.secret, { expiresIn: '3h' });
};

userSchema.methods.toAuthJSON = function() {
    return {
        _id: this._id,
        username: this.username,
        token: generateJWT(this)
    };
};

module.exports = mongoose.model('Users', userSchema);