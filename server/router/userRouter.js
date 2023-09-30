const express = require('express');
const { userModel } = require('../models/userModel');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const BearerToken = req.headers['authorization'];
  if (!BearerToken) return res.status(401).send('Access denied');
  const token = BearerToken.split(' ')[1];
  jwt.verify(token, 'secret', (err, data) => {
    if (err) return res.status(401).send('Access denied');
    req.user = data;
    req.token = token;
    next();
  });
};

userRouter.post('/signup', async (req, res) => {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password,
  });
  await user.save();
  res.send(user);
});

userRouter.post('/login', async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const getuser = await userModel.findOne({ username: username });
  if (!getuser) res.send('user not found');
  res.send({ token: jwt.sign({ getuser }, 'secret'), user: getuser });
});

module.exports = userRouter;
