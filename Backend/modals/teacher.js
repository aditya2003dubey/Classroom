const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: String,
    email: String,
    password: String,
    branch: String,
    classroom: String,
});

const teacher = mongoose.model("teacher",teacherSchema);
  module.exports = teacher;