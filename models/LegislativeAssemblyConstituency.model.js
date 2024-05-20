const mongoose = require('mongoose');

const legislativeAssemblyConstituencySchema = new mongoose.Schema({
    name: { type: String, required: true },
    reserved: { type: String, required: true },
    districts: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true },
    // lokSabha: { type: mongoose.Schema.Types.ObjectId, ref: 'LokSabha', required: true },

});

const Constituency = mongoose.model('LegislativeAssemblyConstituency', legislativeAssemblyConstituencySchema, 'constituencies');

module.exports = Constituency;
