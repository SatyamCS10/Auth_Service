const { response } = require('express');
const userService = require('../services/user-service'); // Use the instance directly

class UserController {          
    async createUser(req, res) {
        try {
            const user = await userService.createUser(req.body);
            return res.status(201).json({
                message: 'User created successfully',
                data: user,
                success: true,
                err: {}
            });
        } catch (error) {       
            console.error(error);
            return res.status(500).json({
                message: 'Something went wrong',
                data: {},
                success: false,
                err: error
            });
        }       

    }

    async deleteUser(req, res) {    
        try {
            const response = await userService.deleteUser(req.params.id);
            return res.status(200).json({   
                message: 'User deleted successfully',
                data: response,
                success: true,
                err: {}
            });
        } catch (error) {       
            console.error(error);
            return res.status(500).json({
                message: 'Something went wrong',
                data: {},
                success: false,
                err: error
            });
        }       

    }
}  

module.exports = new UserController();