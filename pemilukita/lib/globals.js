getYoutubeID = function (url) {
    var regex = new RegExp("[\\?&]v=([^&#]*)"),
        results = regex.exec(url);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};