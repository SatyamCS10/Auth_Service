const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');

const UserRepository = require('../repository/user-repository');
const bcrypt = require('bcrypt');
class UserService {
    async createUser(userData) {
        return UserRepository.createUser(userData);
    }

    async deleteUser(userId) {
        return UserRepository.destroyUser(userId);
    }


    async signIn(email,plainPassword){
        try{
            // step 1-> fetch the user using the email
            const user = await UserRepository.getUserByEmail(email);

            // step 2-> compare incoming plain password with stores encrypted password
            const passwordsMatch = await this.checkPassword(plainPassword,user.password);
            if(!passwordsMatch){
                console.log("Password doesn't match");
                throw {error: 'Incorrect Password'};
            }

            // step 3-> if password match then create a token ans send it to user
            const newJWT = await this.createToken({email: user.email,id: user.id});
            return newJWT;
            
        }catch(error){
            console.log("Something went wrong in the sign in process ");
            throw error;
        }
    }
    async createToken(user) {
        try {
            const token = jwt.sign(                      // jwt.sign creates a JWT token
                { email: user.email, id: user.id },
                JWT_KEY,
                { expiresIn: '1h' }
            );
            return token;
        } catch (error) {
            console.error('Error in createToken:', error);
            throw error;
        }
    }

    async verifyToken(token) {  
        try {
            const decoded = jwt.verify(token, JWT_KEY); // jwt.verify verifies the token
            return decoded;
        } catch (error) {
            console.error('Error in verifyToken:', error);
            throw error;
        }   
    }

    async checkPassword(userincomingPassword, savedPassword) {
        try {
            const isMatch = await bcrypt.compare(userincomingPassword, savedPassword);
            return isMatch;
        } catch (error) {
            console.error('Error in checkPassword:', error);
            throw error;
        }
            
        }

    }
module.exports = new UserService();
