Template.app.created = function () {
    SetDefaultState();
};
Template.app.rendered = function () {
    //presidential
    Session.set(SessionRef.Name.IsBiografi, true);
    $.getJSON("http://api.pemiluapi.org/calonpresiden/api/caleg?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
        Session.set(SessionRef.Name.ActiveCandidateLeft, data.data.results.caleg[3]);
        Session.set(SessionRef.Name.ActiveCandidateRight, data.data.results.caleg[2]);
    });
    $.getJSON("http://api.pemiluapi.org/calonpresiden/api/promises?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.Promises, data.data.results);
        var ps = [];
        var hr = [];
        var jw = [];
        var jk = [];
        var psCounter = 0;
        var hrCounter = 0;
        var jwCounter = 0;
        var jkCounter = 0;
        for (var ii = 0; ii < data.data.results.count; ii++) {
            if (data.data.results.promises[ii].id_calon == "ps") {
                ps[psCounter] = data.data.results.promises[ii];
                psCounter++;
            } else if (data.data.results.promises[ii].id_calon == "hr") {
                hr[hrCounter] = data.data.results.promises[ii];
                hrCounter++;
            } else if (data.data.results.promises[ii].id_calon == "jw") {
                jw[jwCounter] = data.data.results.promises[ii];
                jwCounter++;
            } else if (data.data.results.promises[ii].id_calon == "jk") {
                jk[jkCounter] = data.data.results.promises[ii];
                jkCounter++;
            }
        }
        Session.set(SessionRef.Name.ListPrabowoPromises, ps);
        Session.set(SessionRef.Name.ListHattaPromises, hr);
        Session.set(SessionRef.Name.ListJokowiPromises, jw);
        Session.set(SessionRef.Name.ListJKPromises, jk);
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
            } else if (data.data.results.videos[ii].id_calon[0] == "hr") {
                hr[hrCounter] = data.data.results.videos[ii];
                hrCounter++;
            } else if (data.data.results.videos[ii].id_calon[0] == "jw") {
                jw[jwCounter] = data.data.results.videos[ii];
                jwCounter++;
            } else if (data.data.results.videos[ii].id_calon[0] == "jk") {
                jk[jkCounter] = data.data.results.videos[ii];
                jkCounter++;
            }
        }
        Session.set(SessionRef.Name.ListPrabowoCampaignVideos, ps);
        Session.set(SessionRef.Name.ListHattaCampaignVideos, hr);
        Session.set(SessionRef.Name.ListJokowiCampaignVideos, jw);
        Session.set(SessionRef.Name.ListJKCampaignVideos, jk);
    });
    //socmed
//    $.getJSON("http://api.pemiluapi.org/socmedpemilu?apiKey=" + DataRef.ApiKey, function (data) {
//        Session.set(SessionRef.Name.SocialMedia, data.data.results);
//    });
    //stamps
    $.getJSON("http://api.pemiluapi.org/stamps/api/stamps?apiKey=" + DataRef.ApiKey, function (data) {
        resultData = data.data.results;
        Session.set(SessionRef.Name.Stamps, data.data.results);
        var res = [];
        for(var ii = 0; ii < 5;ii++){
        res[ii] = resultData.stamps[getRandomInt(0, resultData.count)]
        }
        Session.set(SessionRef.Name.StampsRandomized,res);
    });
    //campaign finance
    $.getJSON("http://api.pemiluapi.org/campaignfinance/api/contributions?apiKey=" + DataRef.ApiKey, function (data) {
        //        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
    });
    //pelanggaran
    $.getJSON("http://api.pemiluapi.org/laporan_pelanggaran/api/reports?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.Pelanggaran, data.data.results);
    });
    //candidate
    $.getJSON("http://api.pemiluapi.org/candidate/api/caleg?apiKey=" + DataRef.ApiKey, function (data) {
        //        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
    });
    //geograph
    $.getJSON("http://api.pemiluapi.org/geographic/api/caleg?apiKey=" + DataRef.ApiKey, function (data) {
        //        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
    });
    //FAQ
    $.getJSON("http://api.pemiluapi.org/faq-presiden/api/questions?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.FAQ, data.data.results);
    });
    //Pertanyaan
    $.getJSON("http://api.pemiluapi.org/pertanyaan/api/questions?apiKey=" + DataRef.ApiKey, function (data) {
        Session.set(SessionRef.Name.Pertanyaan, data.data.results);
    });
    //Pendidikan
    $.getJSON("http://api.pemiluapi.org/pendidikan/api/pertanyaan?apiKey=" + DataRef.ApiKey, function (data) {
        //        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
    });
    //Berita
    $.getJSON("http://api.pemiluapi.org/berita?json=get_recent_posts&apiKey=" + DataRef.ApiKey, function (data) {
        //        Session.set(SessionRef.Name.PresidentialCandidate, data.data.results);
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
    'click #btnPromises': function () {
        SetDefaultState();
        Session.set(SessionRef.Name.IsPromises, true);
    },
    'click #btnTVKampanye': function () {
        SetDefaultState();
        Session.set(SessionRef.Name.IsTVKampanye, true);
    },
    'click #btnTutup': function (e) {
        e.preventDefault();
        ZPanel.hide();
        $('body').removeClass('modal-open');
    },
    'click .toppanel-close' : function(){
        
        ZPanel.hideTop();
        $('body').removeClass('modal-open');
    },
});

Template.app.LeftHeader = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.nama;
    }
};

Template.app.LeftAgama = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.agama;
    }
};
Template.app.LeftGender = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        if (data.jenis_kelamin == "L")
            return "Laki-Laki";
        else return "Perempuan";
    }
};
Template.app.LeftBirthPlace = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.tempat_lahir;
    }
};
Template.app.LeftBirthDate = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.tanggal_lahir;
    }
};
Template.app.LeftStatusPerkawinan = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.status_perkawinan;
    }
};
Template.app.LeftNamaPasangan = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.nama_pasangan;
    }
};
Template.app.LeftBiografi = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.biografi;
    }
};
Template.app.LeftRiwayatOrganisasis = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.riwayat_organisasi;
    }
};
Template.app.LeftRiwayatPekerjaans = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.riwayat_pekerjaan;
    }
};
Template.app.LeftRiwayatPendidikans = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.riwayat_pendidikan;
    }
};
Template.app.LeftIsRiwayatPenghargaans = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        return data.riwayat_penghargaan;
    }
};
Template.app.LeftPromises = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        if (data.id == "ps") {
            return Session.get(SessionRef.Name.ListPrabowoPromises);

        } else {
            return Session.get(SessionRef.Name.ListHattaPromises);
        }
    }
};
Template.app.LeftTVKampanyeLists = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateLeft)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateLeft);
        if (data.id == "ps") {
            Session.set(SessionRef.Name.ActiveCampaignVideoIdLeft, getYoutubeID(Session.get(SessionRef.Name.ListPrabowoCampaignVideos)[1].url_video));
            return Session.get(SessionRef.Name.ListPrabowoCampaignVideos);

        } else {
            Session.set(SessionRef.Name.ActiveCampaignVideoIdLeft, getYoutubeID(Session.get(SessionRef.Name.ListHattaCampaignVideos)[1].url_video));
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
Template.app.RightAgama = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.agama;
    }
};
Template.app.RightGender = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        if (data.jenis_kelamin == "L")
            return "Laki-Laki";
        else return "Perempuan";
    }
};
Template.app.RightBirthPlace = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.tempat_lahir;
    }
};
Template.app.RightBirthDate = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.tanggal_lahir;
    }
};
Template.app.RightStatusPerkawinan = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.status_perkawinan;
    }
};
Template.app.RightNamaPasangan = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.nama_pasangan;
    }
};
Template.app.RightBiografi = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.biografi;
    }
};
Template.app.RightRiwayatOrganisasis = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.riwayat_organisasi;
    }
};
Template.app.RightRiwayatPekerjaans = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.riwayat_pekerjaan;
    }
};
Template.app.RightRiwayatPendidikans = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.riwayat_pendidikan;
    }
};
Template.app.RightRiwayatPenghargaans = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        return data.riwayat_penghargaan;
    }
};
Template.app.RightPromises = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        if (data.id == "jw") {
            return Session.get(SessionRef.Name.ListJokowiPromises);
        } else {
            return Session.get(SessionRef.Name.ListJKPromises);
        }
    }
};
Template.app.RightTVKampanyeLists = function () {
    if (Session.get(SessionRef.Name.ActiveCandidateRight)) {
        var data = Session.get(SessionRef.Name.ActiveCandidateRight);
        if (data.id == "jw") {
            Session.set(SessionRef.Name.ActiveCampaignVideoIdRight, getYoutubeID(Session.get(SessionRef.Name.ListJokowiCampaignVideos)[1].url_video));
            return Session.get(SessionRef.Name.ListJokowiCampaignVideos);
        } else {
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
Template.app.IsPromises = function () {
    return Session.get(SessionRef.Name.IsPromises);
};
Template.app.IsTVKampanye = function () {
    return Session.get(SessionRef.Name.IsTVKampanye);
};

Template.app.IsFAQ = function () {
    return Session.get(SessionRef.Name.IsFAQ);
};
Template.app.IsPertanyaan = function () {
    return Session.get(SessionRef.Name.IsPertanyaan);
};

Template.app.FAQs = function () {
    var data = Session.get(SessionRef.Name.FAQ);
    console.log(data);
    return data.questions;
};
Template.app.Pertanyaans = function () {
    var data = Session.get(SessionRef.Name.Pertanyaan);
    console.log(data);
    return data.questions;
};

function SetDefaultState() {
    Session.set(SessionRef.Name.IsBiografi, false);
    Session.set(SessionRef.Name.IsRiwayatOrganisasi, false);
    Session.set(SessionRef.Name.IsRiwayatPekerjaan, false);
    Session.set(SessionRef.Name.IsRiwayatPendidikan, false);
    Session.set(SessionRef.Name.IsRiwayatPenghargaan, false);
    Session.set(SessionRef.Name.IsPromises, false);
    Session.set(SessionRef.Name.IsTVKampanye, false);
}