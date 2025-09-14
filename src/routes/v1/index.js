const express = require('express');
const router = express.Router();    
const UserController = require('../../controllers/user-controllers');

router.post('/signup', UserController.createUser);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;