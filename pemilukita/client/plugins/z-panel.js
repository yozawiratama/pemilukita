ZPanel = {
    show: function () {
        $('.leftpanel').animate({
            left: '0'
        }, 500);
        $('.rightpanel').animate({
            right: '0'
        }, 500);
        $('.navbar').animate({
            top: '-65px'
        }, 400);
        $('.zpanel-menu').animate({top : '100px'}, 500);
    },
    hide: function () {
        $('.leftpanel').animate({
            left: '-50%'
        }, 500);
        $('.rightpanel').animate({
            right: '-50%'
        }, 500);
        $('.navbar').animate({
            top: '0'
        }, 400);
        $('.zpanel-menu').animate({top : '-300px'}, 500);
    }
}