Template.rightpage.created = function () {};
Template.rightpage.rendered = function () {};
Template.rightpage.events({});
Template.rightpage.Name = function () {
    if (Session.get(SessionRef.Name.ActiveCandidate)) {
        var data = Session.get(SessionRef.Name.ActiveCandidate);
        return data.nama;
    }
};