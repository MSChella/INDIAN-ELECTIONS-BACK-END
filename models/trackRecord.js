const trackRecordSchema = new mongoose.Schema({
    partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party' },
    achievements: [String],
    failures: [String],
    electionResults: [mongoose.Schema.Types.Mixed]
});