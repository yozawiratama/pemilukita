Template.app.created = function () {};
Template.app.rendered = function () {
    $.getJSON("http://api.pemiluapi.org/calonpresiden/api/caleg?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
        Session.set(SessionRef.Name.ActiveCandidateLeft, data.data.results.caleg[3]);
        Session.set(SessionRef.Name.ActiveCandidateRight, data.data.results.caleg[2]);
    });
    $.getJSON("http://api.pemiluapi.org/candidate/api/provinsi?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.ListAllProvinces, data.data.results);
    });
};
Template.app.events({

});

Template.app.LeftHeader = function(){
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.nama;
    }
};
Template.app.LeftContent = function(){
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.biografi;
    }
};
Template.app.RightHeader = function(){
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.nama;
    }
};
Template.app.RightContent = function(){
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.biografi;
    }
};