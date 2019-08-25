// External dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Internal dependencies
const User = require('../../model/user');

/**
 * POST /api/users
 */
router.post('/users', (req, res) => {
    const user = new User({
        username: req.body.username
    });
    user.setPassword(req.body.password);
    user.save()
        .then(() => res.json({ user: user.toAuthJSON() }))
        .catch(err => res.status(400).json(err));
});

/**
 * POST /api/users/login
 */
router.post('/users/login', (req, res, next) => {
    let errors = {};
    if(!req.body.username) {
       errors['username'] = 'Username is required';
    }
    if(!req.body.password) {
        errors['password'] = 'Password is required';
    }
    if (errors.username || errors.password) {
        return res.status(401).json({ errors });
    }
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if(user) { // User authenticated
            res.status(200).json({ user: user.toAuthJSON() });
        } else {
            res.status(401).json({ error: 'Invalid credentials'});
        }
    })(req, res, next);
});

/**
 * GET /api/users/info
 */
router.get('/users/info', (req, res) => {
    User.findById(req.user.id, (err, user) => {
        if(!user) {
            return res.status(401).json('? tohle by nemělo nastat ?');
        }
        return res.status(200).json({ user: user.toAuthJSON() });
    });
});

module.exports = router;