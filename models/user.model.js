const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true, unique: false },
    lastName: { type: String, required: true, unique: false },
    role: { type: String, required: true },
    legislativeAssemblyConstituencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'LegislativeAssemblyConstituency', required: true },
    districtId: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true },
    talukId: { type: mongoose.Schema.Types.ObjectId, ref: 'Taluk', required: false },
    sex: { type: String, required: true },
    age: { type: String, required: true },
    contactInfo: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    permanentAddress: { type: String, required: true, unique: true },
    temporaryAddress: { type: String, required: true, unique: true },
    state: { type: String, required: true },
    aadharNo: { type: String, required: true, unique: true },
    fathersName: { type: String, required: true },
    mothersName: { type: String, required: true },
    spouseName: { type: String, required: true },
    maritalStatus: { type: String, required: true }

});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
