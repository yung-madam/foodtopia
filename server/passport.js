// External dependencies
const passport = require('passport');
const LocalStrategy = require('passport-local');

// Internal dependencies
const User = require('./model/user');

// Strategy for user authentication
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username })
        .then(user => {
            // Invalid credentials, user won't be logged in
            if(!user || !user.validatePassword(password)) {
                return done(null, null, null);
            }
            return done(null, user, null);
        });
}));
