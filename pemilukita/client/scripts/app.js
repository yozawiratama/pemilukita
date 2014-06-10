Template.app.created = function () {
    SetDefaultState();
};
Template.app.rendered = function () {
    Session.set(SessionRef.Name.IsBiografi, true);
    $.getJSON("http://api.pemiluapi.org/calonpresiden/api/caleg?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
        Session.set(SessionRef.Name.ActiveCandidateLeft, data.data.results.caleg[3]);
        Session.set(SessionRef.Name.ActiveCandidateRight, data.data.results.caleg[2]);
    });
    $.getJSON("http://api.pemiluapi.org/candidate/api/provinsi?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.ListAllProvinces, data.data.results);
    });
    $.getJSON("http://api.pemiluapi.org/calonpresiden/api/videos?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.ListAllCampaignVideos, data.data.results);
        var ps = [];
        var hr = [];
        var jw = [];
        var jk = [];
        var psCounter = 0;
        var hrCounter = 0;
        var jwCounter = 0;
        var jkCounter = 0;
        for (var ii = 0; ii < data.data.results.count; ii++) {
            if (data.data.results.videos[ii].id_calon[0] == "ps") {
                ps[psCounter] = data.data.results.videos[ii];
                psCounter++;
            }
            else if (data.data.results.videos[ii].id_calon[0] == "hr") {
                hr[hrCounter] = data.data.results.videos[ii];
                hrCounter++;
            }
            else if (data.data.results.videos[ii].id_calon[0] == "jw") {
                jw[jwCounter] = data.data.results.videos[ii];
                jwCounter++;
            }
            else if (data.data.results.videos[ii].id_calon[0] == "jk") {
                jk[jkCounter] = data.data.results.videos[ii];
                jkCounter++;
            }
        }
        Session.set(SessionRef.Name.ListPrabowoCampaignVideos, ps);
        Session.set(SessionRef.Name.ListHattaCampaignVideos, hr);
        Session.set(SessionRef.Name.ListJokowiCampaignVideos, jw);
        Session.set(SessionRef.Name.ListJKCampaignVideos, jk);
    });
};
Template.app.events({
    'click #btnPrabowoInfo': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidateLeft, data.caleg[3]);
    },
    'click #btnHattaInfo': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidateLeft, data.caleg[0]);
    },
    'click #btnJokowiInfo': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidateRight, data.caleg[2]);
    },
    'click #btnJKInfo': function () {
        var data = Session.get(SessionRef.Name.PresidentialCandidate);
        Session.set(SessionRef.Name.ActiveCandidateRight, data.caleg[1]);
    },
    'click #btnBiografi': function () {
        SetDefaultState();
        Session.set(SessionRef.Name.IsBiografi, true);
    },
    'click #btnROgranisasi': function () {
        SetDefaultState();
        Session.set(SessionRef.Name.IsRiwayatOrganisasi, true);
    },
    'click #btnRPekerjaan': function () {
        SetDefaultState();
        Session.set(SessionRef.Name.IsRiwayatPekerjaan, true);
    },
    'click #btnRPendidikan': function () {
        SetDefaultState();
        Session.set(SessionRef.Name.IsRiwayatPendidikan, true);
    },
    'click #btnRPenghargaan': function () {
        SetDefaultState();
        Session.set(SessionRef.Name.IsRiwayatPenghargaan, true);
    },
    'click #btnTVKampanye': function () {
        SetDefaultState();
        Session.set(SessionRef.Name.IsTVKampanye, true);
    }
});

Template.app.LeftHeader = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.nama;
    }
};
Template.app.LeftBiografi = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.biografi;
    }
};
Template.app.LeftTVKampanyeLists = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        if (data.id == "ps"){
            Session.set(SessionRef.Name.ActiveCampaignVideoIdLeft, getYoutubeID(Session.get(SessionRef.Name.ListPrabowoCampaignVideos)[1].url_video));
            return Session.get(SessionRef.Name.ListPrabowoCampaignVideos);

        }
        else{
            Session.set(SessionRef.Name.ActiveCampaignVideoIdLeft, getYoutubeID(Session.get(SessionRef.Name.ListHattaCampaignVideos)[0].url_video));
            return Session.get(SessionRef.Name.ListHattaCampaignVideos);
        }
    }
};
Template.app.LeftTVKampanyeID = function () {
    return Session.get(SessionRef.Name.ActiveCampaignVideoIdLeft);
};

Template.app.RightHeader = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.nama;
    }
};
Template.app.RightBiografi = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.biografi;
    }
};
Template.app.RightTVKampanyeLists = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        if (data.id == "jw"){
            Session.set(SessionRef.Name.ActiveCampaignVideoIdRight, getYoutubeID(Session.get(SessionRef.Name.ListJokowiCampaignVideos)[1].url_video));
            return Session.get(SessionRef.Name.ListJokowiCampaignVideos);
        }
        else{
            Session.set(SessionRef.Name.ActiveCampaignVideoIdRight, getYoutubeID(Session.get(SessionRef.Name.ListJKCampaignVideos)[1].url_video));
            return Session.get(SessionRef.Name.ListJKCampaignVideos);
        }
    }
};

Template.app.RightTVKampanyeID = function () {
    return Session.get(SessionRef.Name.ActiveCampaignVideoIdRight);
};

Template.app.IsBiografi = function () {
    return Session.get(SessionRef.Name.IsBiografi);
};
Template.app.IsRiwayatOrganisasi = function () {
    return Session.get(SessionRef.Name.IsRiwayatOrganisasi);
};
Template.app.IsRiwayatPekerjaan = function () {
    return Session.get(SessionRef.Name.IsRiwayatPekerjaan);
};
Template.app.IsRiwayatPendidikan = function () {
    return Session.get(SessionRef.Name.IsRiwayatPendidikan);
};
Template.app.IsRiwayatPenghargaan = function () {
    return Session.get(SessionRef.Name.IsRiwayatPenghargaan);
};
Template.app.IsTVKampanye = function () {
    return Session.get(SessionRef.Name.IsTVKampanye);
};

function SetDefaultState() {
    Session.set(SessionRef.Name.IsBiografi, false);
    Session.set(SessionRef.Name.IsRiwayatOrganisasi, false);
    Session.set(SessionRef.Name.IsRiwayatPekerjaan, false);
    Session.set(SessionRef.Name.IsRiwayatPendidikan, false);
    Session.set(SessionRef.Name.IsRiwayatPenghargaan, false);
    Session.set(SessionRef.Name.IsTVKampanye, false);
}