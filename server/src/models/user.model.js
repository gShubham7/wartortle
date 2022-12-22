const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  role: {
    type: String,
    enum: ["User", "Teacher", "Admin"],
  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
