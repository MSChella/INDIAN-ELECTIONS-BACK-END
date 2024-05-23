const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true, unique: false },
    lastName: { type: String, required: true, unique: false },
    role: { type: String, required: true },
    selectedConstituency: { type: mongoose.Schema.Types.ObjectId, ref: 'LegislativeAssemblyConstituency', required: true },
    selectedDistrict: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true },
    talukId: { type: mongoose.Schema.Types.ObjectId, ref: 'Taluk', required: false },
    sex: { type: String, required: true },
    age: { type: String, required: true },
    contactInfo: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: false },
    address: { type: String, required: true, unique: false },
    permanentAddress: { type: String, required: true, unique: false },
    temporaryAddress: { type: String, required: true, unique: false },
    state: { type: String, required: true },
    aadharNo: { type: String, required: true, unique: false },
    fathersName: { type: String, required: true },
    mothersName: { type: String, required: true },
    spouseName: { type: String, required: true },
    maritalStatus: { type: String, required: true }

});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
