Template.versus.created = function () {};
Template.versus.rendered = function () {
    var footertop = $('.info').height() + 10;
    var navtop = $('.nav-down').offset().top;
    var logotop = $('.cover-caption').offset().top;
//    $('.vote-bar').sticky({
//        topSpacing: window.innerHeight - 70
//    });
    
    $('.cover').css('height', window.innerHeight);
    $('.capres').css('height', window.innerHeight);
    $('.info').css('height', window.innerHeight);
    $('.vote-bar').css('top', window.innerHeight*2 - $('.vote-bar').height());
    $('.coblosBtn').css('top', window.innerHeight);
    $('.coblosBtn').css('height', window.innerHeight);
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        
        if(scroll <= $('.vote-bar').offset().top-180) {
            $('.nav-container').css('top', navtop + (scroll*0.7));
        }
        $('.cover-caption').css('top', logotop + -(scroll*0.45));
        
        if($('.nav-container').offset().top>600) {
            $('.nav-down').css('background', '#D7402C');
            $('.nav-down').css('color', '#fff');
            $('.nav-down').css('text-size', '28px');
            $('.nav-down').css('height', '150px');
            $('.nav-down').css('width', '150px');
            $('.nav-down').css('-webkit-box-shadow', '0 5px 10px rgba(0, 0, 0, 0.3)');
            $('.nav-down').css('-moz-box-shadow', '0 5px 10px rgba(0, 0, 0, 0.3)');
            $('.nav-down').css('box-shadow', '0 5px 10px rgba(0, 0, 0, 0.3)');
            $('.nav-down .dwn').css('display', 'none');
            $('.nav-down .src').css('display', 'block');
            $('.nav-down').addClass('banding');
        } else if($('.nav-container').offset().top<=600) {
            $('.nav-down').css('background', '');
            $('.nav-down').css('color', '#D7402C');
            $('.nav-down').css('text-size', '');
            $('.nav-down').css('height', '80px');
            $('.nav-down').css('width', '80px');
            $('.nav-down').css('-webkit-box-shadow', '');
            $('.nav-down').css('-moz-box-shadow', '');
            $('.nav-down').css('box-shadow', '');
            $('.nav-down .dwn').css('display', 'block');
            $('.nav-down .src').css('display', 'none');
            $('.banding').removeClass('banding');
        }
        
        if(scroll >= $('.info').offset().top) {
            $('.capres').css('position', 'absolute');
            $('.capres').css('top', $('.cover').height());
        } else {
            $('.capres').css('position', 'fixed');
            $('.capres').css('top', 0);
        }
        
//        if(scroll-400 >= $('.info').offset().top) {
//            $('.nav-container').css('position', 'fixed');
//            $('.nav-container').css('top', -10);
//        } else if(scroll-100 <= $('.info').offset().top){
//            $('.nav-container').css('position', 'absolute');
//        }
        
//        if(scroll >= footertop) {
//            $('.is-sticky .vote-bar').css('position', 'absolute');
//            $('.is-sticky .vote-bar').css('bottom', $('.footer').height()-50);
//            $('.is-sticky .vote-bar').css('top', '');
//        } else {
//            $('.is-sticky .vote-bar').css('position', 'fixed');
//            $('.is-sticky .vote-bar').css('bottom', 30);
//        }
        
        console.log(scroll +" " + ($('.vote-bar').offset().top - 190));
    });
};
Template.versus.events({
    'click .nav-down.banding': function (e) {
        e.preventDefault();
        ZPanel.show();
        $('body').addClass('modal-open');
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
    },{
        sort : {
            AmountOfVote : -1
        }

    });
}
Template.versus.DuaReasons = function () {
    return CandidateVotes.find({
        Candidate_ID: 2
    },{
        sort : {
            AmountOfVote : -1
        }

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