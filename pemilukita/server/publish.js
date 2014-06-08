Meteor.publish('CandidateVotes', function () {
    return CandidateVotes.find();
});
Meteor.publish('ReasonVotes', function () {
    return ReasonVotes.find();
});