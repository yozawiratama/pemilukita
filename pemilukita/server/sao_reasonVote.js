Meteor.methods({
    ReasonVotesInsert: function (voterID, candidateVoteID) {
        ReasonVotes.insert({
            Voter_ID: voterID,
            CandidateVote_ID: candidateVoteID,
            CreatedBy: voterID,
            CreatedAt: new Date()
        });

    }
});