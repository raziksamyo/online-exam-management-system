const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const TeacherModels = require("../../models/admin/Teacher");

let CoursesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "TeacherModel", required: true },
  status: { type: Number, required: true }, // 1.Active 0.Inactive
});

module.exports = mongoose.model("Courses", CoursesSchema);
