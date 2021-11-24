require('dotenv').config()
require('express-async-errors')

//requiring dependencies
const express = require('express')
const app = express();
const mongoose = require('mongoose');

//importing routes
const todoRoutes = require('./routes/todos')

//creating a database connection
mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection;
db.once('open', () => {
    console.log('database connected');
})
db.on('error', (e) => {
    console.log(e)
})

//middleware
app.use(express.json());

//routes
app.use('/api/v1/todo-list/', todoRoutes);


//listening server on port
app.listen(5000, () => {
    console.log(`listening on port 5000`);
})