Template.versus.created = function () {};
Template.versus.rendered = function () {
    var footertop = $('.info').height() + 10;
    var navtop = $('.nav-down').offset().top;
//    $('.vote-bar').sticky({
//        topSpacing: window.innerHeight - 70
//    });
    
    $('.cover').css('height', window.innerHeight);
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        
        $('.nav-container').css('top', navtop + (scroll*0.45));
        
        if($('.nav-container').offset().top>600) {
            $('.nav-down').css('background', '#d9534f');
            $('.nav-down').css('color', '#fff');
            $('.nav-down').css('text-size', '28px');
            $('.nav-down').css('border-radius', '6px');
            $('.nav-down i').css('display', 'none');
            $('.nav-down h3').css('display', 'block');
            $('.nav-down').addClass('banding');
        } else if($('.nav-container').offset().top<=600) {
            $('.nav-down').css('background', '');
            $('.nav-down').css('color', '#d9534f');
            $('.nav-down').css('text-size', '');
            $('.nav-down').css('border-radius', '50%');
            $('.nav-down i').css('display', 'block');
            $('.nav-down h3').css('display', 'none');
            $('.banding').removeClass('banding');
        }
        
        if(scroll-100 >= $('.info').offset().top) {
            $('.nav-container').css('position', 'fixed');
            $('.nav-container').css('top', -10);
        } else if(scroll-100 <= $('.info').offset().top){
            $('.nav-container').css('position', 'absolute');
        }
        
//        if(scroll >= footertop) {
//            $('.is-sticky .vote-bar').css('position', 'absolute');
//            $('.is-sticky .vote-bar').css('bottom', $('.footer').height()-50);
//            $('.is-sticky .vote-bar').css('top', '');
//        } else {
//            $('.is-sticky .vote-bar').css('position', 'fixed');
//            $('.is-sticky .vote-bar').css('bottom', 30);
//        }
        
        console.log(scroll +" " + $('.cover').innerHeight);
    });
};
Template.versus.events({
    'click .nav-down.banding': function (e) {
        e.preventDefault();
        ZPanel.show();
    },
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