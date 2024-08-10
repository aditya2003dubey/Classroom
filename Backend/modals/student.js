const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    email: String,
    password: String,
    rollno: Number,
    class: String,
    classroom_name: String,
    classroom: {
      type: Schema.Types.ObjectId,
        ref: "classroom",
    }
});

const student = mongoose.model("student",studentSchema);
  module.exports = student;