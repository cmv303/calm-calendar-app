const { User } = require("../models");

const userdata = [
    {
        email: 'mtstallings95@gmail.com',
        password: '12345',
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;