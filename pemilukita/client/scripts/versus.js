Template.versus.created = function () {};
Template.versus.rendered = function () {};
Template.versus.events({
    'click #btnBukaPrabowo': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[3]);
        $('.leftpage').removeClass('leftpage-hide');
    },
    'click #btnBukaHatta': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[0]);
        $('.leftpage').removeClass('leftpage-hide');
    },
    'click #btnBukaJokowi': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[2]);
        $('.rightpage').removeClass('rightpage-hide');
    },
    'click #btnBukaJK': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[1]);
        $('.rightpage').removeClass('rightpage-hide');
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