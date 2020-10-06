const mongoose = require('mongoose');
require('dotenv').config();

const address = process.env.DB;

mongoose.connect(address, {
    useCreateIndex: true,
}).then(() => console.log('Database connected ' + address));