Template.app.created = function () {};
Template.app.rendered = function () {
    $.getJSON("http://api.pemiluapi.org/calonpresiden/api/caleg?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
    });
    $.getJSON("http://api.pemiluapi.org/candidate/api/provinsi?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.ListAllProvinces, data.data.results);
    });
};
Template.app.events({

});

Template.app.SatuReasons = function () {
    return CandidateVotes.find({
        Candidate_ID: 1
    });
}
Template.app.DuaReasons = function () {
    return CandidateVotes.find({
        Candidate_ID: 2
    });
}
Template.app.HasCoblos = function () {
    if (Meteor.userId()) {
        if (CandidateVotes.find({
            User_ID: Meteor.userId()
        }).count() > 0) {
            Meteor.subscribe('ReasonVotes');
            return true;
        } else return false;
    } else return false;

}