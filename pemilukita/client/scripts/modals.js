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