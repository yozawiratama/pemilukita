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
        $('.btn-coblos').attr('disabled', 'disabled');
        Meteor.call('CandidateVotesInsert', Meteor.userId(), Session.get(SessionRef.Name.SelectedCandidateID), $('#selProvinsi').val(), $('#txaReason').val(), function (err, data) {
            if (err) {
                alert(err.message);
                $('.btn-coblos').removeAttr('disabled', 'disabled');
            } else {
                $('#mdlCoblos').modal('hide');
                $('.btn-coblos').removeAttr('disabled', 'disabled');
            }
        });
    }
});

Template.modal_coblos.rendered = function () {
    $.getJSON("http://api.pemiluapi.org/candidate/api/provinsi?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.ListAllProvinces, data.data.results);
    });
};

Template.modal_coblos.Provinces = function () {
    var provinces = Session.get(SessionRef.Name.ListAllProvinces);
    if (provinces) {
        return provinces.provinsi;
    }
}

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
        $('#mdlLoginTerms').modal('hide');
        var isc = $('#cbxTermsLogin').is(':checked');
        if (isc) {
            Meteor.loginWithGoogle(function (err) {
                if (err)
                    alert(err.message);
                else
                    $('#cbxTermsLogin').removeAttr('checked');
            });
        }
    }
});

Template.modal_stamps.events({
    'click #btnStampsRandomMore': function () {
        var resultData = Session.get(SessionRef.Name.Stamps);
        var res = [];
        for (var ii = 0; ii < 9; ii++) {
            res[ii] = resultData.stamps[getRandomInt(0, resultData.count)]
        }
        Session.set(SessionRef.Name.StampsRandomized, res);
    }
});

Template.modal_stamps.Stamps = function () {
    if (Session.get(SessionRef.Name.Stamps))
        return Session.get(SessionRef.Name.StampsRandomized);
};
Template.modal_stamps.SelectedStamps = function () {
    if(Session.get(SessionRef.Name.SelectedStamps))
    return Session.get(SessionRef.Name.SelectedStamps).url_small;
};
Template.ctn_stamps.events({
    'click img': function () {
        console.log(this);
        Session.set(SessionRef.Name.SelectedStamps, this);
    }
});