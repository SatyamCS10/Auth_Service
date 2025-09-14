const UserRepository = require('../repository/user-repository');

class UserService {
    async createUser(userData) {
        return UserRepository.createUser(userData);
    }

    async deleteUser(userId) {
        return UserRepository.destroyUser(userId);
    }
}

module.exports = new UserService();
