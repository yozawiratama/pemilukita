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

Template.app.LeftHeader = function(){
    if (Session.get(SessionRef.Name.ActiveCandidate)) {
        var data = Session.get(SessionRef.Name.ActiveCandidate);
        return data.nama;
    }
};
Template.app.LeftContent = function(){
    if (Session.get(SessionRef.Name.ActiveCandidate)) {
        var data = Session.get(SessionRef.Name.ActiveCandidate);
        return data.biografi;
    }
};
Template.app.RightHeader = function(){
    if (Session.get(SessionRef.Name.ActiveCandidate)) {
        var data = Session.get(SessionRef.Name.ActiveCandidate);
        return data.nama;
    }
};
Template.app.RightContent = function(){
    if (Session.get(SessionRef.Name.ActiveCandidate)) {
        var data = Session.get(SessionRef.Name.ActiveCandidate);
        return data.biografi;
    }
};