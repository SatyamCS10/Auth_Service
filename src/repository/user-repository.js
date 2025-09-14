const { User } = require('../models/index');

class UserRepository {
    async createUser({ name, email, password }) {
        try {
            const user = await User.create({ name, email, password });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async destroyUser(userId) {
        try {
            await User.destroy({ where: { id: userId } });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserRepository();
