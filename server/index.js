const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// import userRouter from './router/userRouter';
// import todolistRouter from './router/todolistRouter';

const userRouter = require('./router/userRouter');
const todolistRouter = require('./router/todolistRouter');
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('connection established');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRouter);
app.use('/todo', todolistRouter);

app.listen(3001, () => {
  console.log('listening on port 3001');
});
