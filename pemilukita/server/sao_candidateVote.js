Meteor.methods({
    CandidateVotesInsert: function (userID, candidateID, province, reason) {
        var id = CandidateVotes.insert({
            User_ID: userID,
            Candidate_ID : candidateID,
            Province: province,
            Reason: reason,
            AmountOfVote : 0,
            CreatedBy: userID,
            CreatedAt: new Date()
        });
        return id;
    }
});