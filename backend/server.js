const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.DATABASE_ACCESS;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open',()=> {
    console.log("Database Connected Successfully");
})
app.use(cors());
app.use(express.json());

const transportRouter = require('./routes/addTrans');
const usersRouter = require('./routes/addUser');

app.use('/transport', transportRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});