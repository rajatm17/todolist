const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  // dueDate: { type: Date, required: true },
  // priority: { type: Number, required: true },
});

const todoListModel = mongoose.model('todoList', todolistSchema);

module.exports = { todoListModel };
