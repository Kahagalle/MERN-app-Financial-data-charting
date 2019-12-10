const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, {useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, dbName: "fxdb"})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.")
})

const userRouter = require('./routes/users');
const indicatorRouter = require('./routes/indicator');

app.use('/users', userRouter);
app.use('/indicators', indicatorRouter);

app.listen(port, () => {
    console.log('Server is running on port: %d',port);
})