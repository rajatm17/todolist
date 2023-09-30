const express = require('express');
const todolistRouter = express.Router();

const { todoListModel } = require('../models/todolistModel');
const { userModel } = require('../models/userModel');
const { reset } = require('nodemon');

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

todolistRouter.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await userModel.findById(userId);
    if (user && user.todo && Array.isArray(user.todo)) {
      const todolist = await todoListModel.find({ _id: { $in: user.todo } });
      res.send(todolist);
    } else {
      res.status(404).send('User or todolist not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

todolistRouter.post('/compose', async (req, res, next) => {
  const title = req.body.title;
  const userId = req.body.userId;

  // const description = req.body.description;
  // const dueDate = req.body.dueDate;
  // const priority = req.body.priority;

  const todo = new todoListModel({
    title: title,
    user: userId,

    // description: description,
    // dueDate: dueDate,
    // priority: priority,
  });

  await todo.save();
  const user = await userModel.findById(req.body.userId);
  user.todo.push(todo);
  await user.save();
  res.status(200).send(todo);
});

todolistRouter.delete('/:id', async (req, res, next) => {
  const todoId = req.params.id;
  await todoListModel.deleteOne({ _id: todoId });
});

todolistRouter.put('/:id', async (req, res, next) => {
  const todoId = req.params.id;
  const updatedTodo = await todoListModel.findOneAndUpdate(
    { _id: todoId },
    {
      title: req.body.title,
      completed: req.body.isCompleted,
      // description: req.body.description,
      // dueDate: req.body.dueDate,
      // priority: req.body.priority,
    }
  );
});

module.exports = todolistRouter;
