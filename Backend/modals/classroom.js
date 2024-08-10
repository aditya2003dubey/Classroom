const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const classroomSchema = new Schema({
    name: String,
    teacher_name: String,
    time: String,
    schedule: String,
});

const classroom = mongoose.model("classroom",classroomSchema);
  module.exports = classroom;