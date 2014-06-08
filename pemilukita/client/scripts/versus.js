Template.versus.created = function () {};
Template.versus.rendered = function () {};
Template.versus.events({
    'click #btnBukaPrabowo': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[3]);
        console.log(data);
    },
    'click #btnBukaHatta': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[0]);
    },
    'click #btnBukaJokowi': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[2]);
        
    },
    'click #btnBukaJK': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[1]);
        
    },
    'click #btnVote1' : function(){
    
    }
});

Template.versus.RolePrabowo = function () {
    if (Session.get(SessionRef.Name.PresidentialCandidate)) {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        return data.caleg[3].role;
    }
};
Template.versus.RoleHatta = function () {
    if (Session.get(SessionRef.Name.PresidentialCandidate)) {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        return data.caleg[0].role;
    }
};
Template.versus.RoleJokowi = function () {
    if (Session.get(SessionRef.Name.PresidentialCandidate)) {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        return data.caleg[2].role;
    }
};
Template.versus.RoleJK = function () {
    if (Session.get(SessionRef.Name.PresidentialCandidate)) {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        return data.caleg[1].role;
    }
};