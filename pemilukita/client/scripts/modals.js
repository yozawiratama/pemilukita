Template.modal_candidate_info.Name = function () {
    if (Session.get(SessionRef.Name.ActiveCandidate)) {
        var data = Session.get(SessionRef.Name.ActiveCandidate);
        return data.nama;
    }
};
Template.modal_candidate_info.Biografi = function () {
    if (Session.get(SessionRef.Name.ActiveCandidate)) {
        var data = Session.get(SessionRef.Name.ActiveCandidate);
        return data.biografi;
    }
};



Template.modal_coblos.events({
    'submit': function (e) {
        e.preventDefault();
        Meteor.call('CandidateVotesInsert', Meteor.userId(), Session.get(SessionRef.Name.SelectedCandidateID), $('#selProvinsi').val(), $('#txaReason').val(), function (err, data) {
            if (err) {
                alert(err.message);
            } else {
                $('#mdlCoblos').modal('hide');
            }
        });
    }
});


Template.modal_kebijakan_privasi.rendered = function () {

};
Template.modal_kebijakan_privasi.events({
    'change #cbxTermsLogin': function () {
        var isc = $('#cbxTermsLogin').is(':checked');
        if (isc)
            $('#btnLoginOnModal').removeAttr('disabled');
        else
            $('#btnLoginOnModal').attr('disabled', 'disabled');
    },
    'click #btnLoginOnModal': function () {
        Meteor.loginWithGoogle(function (err) {
            if (err)
                alert(err.message);
        });
    }
});