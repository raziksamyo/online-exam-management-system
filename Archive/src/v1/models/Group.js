const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GroupSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    country: { ref: 'Country', type: mongoose.Schema.Types.ObjectId, required: true },
    state: { ref: 'State', type: mongoose.Schema.Types.ObjectId, required: true },
    city: { ref: 'City', type: mongoose.Schema.Types.ObjectId, required: true },
    area: { ref: 'Area', type: mongoose.Schema.Types.ObjectId, required: true },
    contact_name: { type: String, required: true },
    contact_number: { type: Number, required: true },
    email: { type: String, required: true },
    status: { type: Number, required: true },  // 1.Active 0.Inactive
    created_at : {type: Number, required: true},
    created_by: { ref: 'User', type: mongoose.Schema.Types.ObjectId, required: true },
    updated_at : {type: Number, required: false},
    updated_by: { ref: 'User', type: mongoose.Schema.Types.ObjectId, required: false },
});

module.exports = mongoose.model('Group', GroupSchema);