const mongoose = require('mongoose');

const talukSchema = new mongoose.Schema({
    name: { type: String, required: true },
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true }
});

const Taluk = mongoose.model('Taluk', talukSchema);

module.exports = Taluk;
