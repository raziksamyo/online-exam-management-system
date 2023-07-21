const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let TeacherSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  contactNumber: { type: Number, required: true },
  experience: { type: Number, required: true },
  joinDate: { type: Date, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  qualification: [{ type: String, required: true }],
  status: { type: Number, required: true }, // 1.Active 0.Inactive
});

module.exports = mongoose.model("Teacher", TeacherSchema);
