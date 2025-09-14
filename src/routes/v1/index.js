const express = require('express');
const router = express.Router();    
const UserController = require('../../controllers/user-controllers');
const AuthRequestValidators = require('../../middlewares/auth-request-validators');

console.log('UserController.createUser:', typeof UserController.createUser);
console.log('UserController.signIn:', typeof UserController.signIn);
console.log('AuthRequestValidators.validateUserAuth:', typeof AuthRequestValidators.validateUserAuth);

router.post('/signup', 
    AuthRequestValidators.validateUserAuth,
    UserController.createUser);

router.post('/login',
    AuthRequestValidators.validateUserAuth,
    UserController.signIn);

module.exports = router;