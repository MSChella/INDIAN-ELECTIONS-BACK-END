const pollOptionSchema = new mongoose.Schema({
    pollId: { type: mongoose.Schema.Types.ObjectId, ref: 'Poll' },
    optionText: String
});