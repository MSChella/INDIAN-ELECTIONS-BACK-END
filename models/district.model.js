const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const District = mongoose.model('District', districtSchema, 'districts');

module.exports = District;
