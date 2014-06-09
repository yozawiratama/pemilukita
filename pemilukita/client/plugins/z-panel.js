ZPanel = {
    show: function (elm) {
        $('.leftpanel').animate({
            left: '-48%'
        }, 500);
    },
    hide: function (elm) {
        $('.rightpanel').animate({
            right: '-48%'
        }, 500);
    }
}