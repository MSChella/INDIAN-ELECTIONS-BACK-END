const pollVoteSchema = new mongoose.Schema({
    pollId: { type: mongoose.Schema.Types.ObjectId, ref: 'Poll' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    pollOptionId: { type: mongoose.Schema.Types.ObjectId, ref: 'PollOption' }
});