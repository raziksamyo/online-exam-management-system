const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: Number, required: true },
    gender: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    dob: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: Number, required: true },  // 1.Active 0.Inactive
});

module.exports = mongoose.model('Student', StudentSchema);
