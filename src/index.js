const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const {User} = require('./models');
// const bcrypt = require('bcrypt');    // Import bcrypt for password comparison


// const UserRepository = require('./repository/user-repository');
const app = express();



const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        
        // Just for testing purpose
        // const incomingPassword = '123456';
        // const user = await User.findByPk(2);   // Assuming a user with primary key 1 exists
        // const response = bcrypt.compareSync(incomingPassword, user.password);
        // console.log(response);

        // for login1 purpose
        // const user = await UserRepository.getUserById(2);
        // console.log(user);

    });
}

prepareAndStartServer();