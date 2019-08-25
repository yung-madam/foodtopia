// External dependencies
const jwt = require('express-jwt');
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Internal dependencies
const config = require('../config');

/**
 * Authorization router
 */
exports.router = jwt({
        secret: config.secret
    })
    .unless({
        path: [
            // Unsecured endpoints
            '/api/users',
            '/api/users/login'
        ]
    });

/**
 * Handler for authorization errors
 */
exports.handler = (err, req, res, next) => {
    if(err.name === 'UnauthorizedError') {
        return res.status(err.status).json({ message: err.message });
    }
    next();
};