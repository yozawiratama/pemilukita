Template.leftpage.created = function(){};
Template.leftpage.rendered = function(){};
Template.leftpage.events({});
Template.leftpage.Name = function(){
    if (Session.get(SessionRef.Name.ActiveCandidate)) {
        var data = Session.get(SessionRef.Name.ActiveCandidate);
        return data.nama;
    }
};