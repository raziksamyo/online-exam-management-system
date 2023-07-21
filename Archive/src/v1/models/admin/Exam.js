const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let examSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  starttime: { type: Date, required: true },
  duration: { type: Number, required: true },
  totalquestion: { type: Number, required: true },
  marks: { type: Number, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModels", required: true },
  status: { type: Number, required: true },
  // 1.Active 0.Inactive
});

module.exports = mongoose.model("Exam", examSchema);
