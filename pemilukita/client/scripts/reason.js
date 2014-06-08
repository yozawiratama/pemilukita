Template.reason.btnVoteUp = function () {
    Meteor.call('ReasonVotesInsert', Meteor.userId(), this._id);
};
Template.reason.IsOwn = function () {
    if(this.CreatedBy == Meteor.userId()) return true;
    else return false;
};