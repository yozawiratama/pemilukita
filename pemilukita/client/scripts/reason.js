Template.reason.events({
    'click #btnVoteUp': function () {
        Meteor.call('ReasonVotesInsert', Meteor.userId(), this._id, function (err) {
            if (err) alert(err.message);
        });
    }
})
Template.reason.IsOwn = function () {
    if (this.CreatedBy == Meteor.userId()) return true;
    else return false;
};
Template.reason.Disabled = function () {
    if (ReasonVotes.find({
        Voter_ID: Meteor.userId(),
        CandidateVote_ID: this._id
    }).count() > 0) return "disabled";
    else return "";
};