Template.app.created = function () {};
Template.app.rendered = function () {
    $.getJSON("http://api.pemiluapi.org/calonpresiden/api/caleg?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
    });
};
Template.app.events({

});