Template.versus.created = function () {};
Template.versus.rendered = function () {
    var footertop = $('.info').height() + 10;
    $('.vote-bar').sticky({
        topSpacing: window.innerHeight - 70
    });
    $('.cover').css('height', window.innerHeight);
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        
        if(scroll >= footertop) {
            $('.is-sticky .vote-bar').css('position', 'absolute');
            $('.is-sticky .vote-bar').css('bottom', $('.footer').height()-50);
            $('.is-sticky .vote-bar').css('top', '');
        } else {
            $('.is-sticky .vote-bar').css('position', 'fixed');
            $('.is-sticky .vote-bar').css('bottom', 30);
        }
        
        console.log(scroll +" " +footertop);
    });
};
Template.versus.events({
    'click .nav-down': function (e) {
        e.preventDefault();
        $(window).scrollTo('.info', 1000);
    },
    'click #btnBukaPrabowo': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[3]);
//        Hyperbox.show('#mdlCandidateInfo');
        ZPanel.show();
    },
    'click #btnBukaHatta': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[0]);
//        Hyperbox.show('#mdlCandidateInfo');
        ZPanel.show();
    },
    'click #btnBukaJokowi': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[2]);
//        Hyperbox.show('#mdlCandidateInfo');
        ZPanel.show();
    },
    'click #btnBukaJK': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidate, data.caleg[1]);
//        Hyperbox.show('#mdlCandidateInfo');
        ZPanel.show();

    },
    'click #btnVote1': function () {
        if (Meteor.userId()) {
            Session.set(SessionRef.Name.SelectedCandidateID, 1);
            $('#mdlCoblos').modal('show');
        } else {
            $('#mdlLoginTerms').modal('show');
        }
    },
    'click #btnVote2': function () {
        if (Meteor.userId()) {
            Session.set(SessionRef.Name.SelectedCandidateID, 2);
            $('#mdlCoblos').modal('show');
        } else {
            $('#mdlLoginTerms').modal('show');
        }
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
Template.versus.IsVoted = function () {
    if (CandidateVotes.find({
        User_ID: Meteor.userId()
    }).count() > 0) {
        return true;
    } else return false;
};

Template.versus.SatuReasons = function () {
    return CandidateVotes.find({
        Candidate_ID: 1
    });
}
Template.versus.DuaReasons = function () {
    return CandidateVotes.find({
        Candidate_ID: 2
    });
}
Template.versus.HasCoblos = function () {
    if (Meteor.userId()) {
        if (CandidateVotes.find({
            User_ID: Meteor.userId()
        }).count() > 0) {
            Meteor.subscribe('ReasonVotes');
            return true;
        } else return false;
    } else return false;

}