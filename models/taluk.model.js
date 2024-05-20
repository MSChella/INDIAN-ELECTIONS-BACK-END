const legislativeAssemblyConstituencySchema = new mongoose.Schema({
    name: String,
    districtId: { type: mongoose.Schema.Types.ObjectId, ref: 'District' }
});