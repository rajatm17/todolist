const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, requird: true },
  todo: [{ type: mongoose.Types.ObjectId, ref: 'todolistModel' }],
});

const userModel = mongoose.model('User', userSchema);

//named exports
module.exports = { userModel };
