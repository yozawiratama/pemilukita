ZPanel = {
    show: function () {
        $('.leftpanel').animate({
            left: '0'
        }, 500);
        $('.rightpanel').animate({
            right: '0'
        }, 500);
        $('#userbar').animate({
            top: '-65px'
        }, 400);
        $('.zpanel-menu').animate({
            top: '30%'
        }, 500);
    },
    hide: function () {
        $('.leftpanel').animate({
            left: '-50%'
        }, 500);
        $('.rightpanel').animate({
            right: '-50%'
        }, 500);
        $('#userbar').animate({
            top: '0'
        }, 400);
        $('.zpanel-menu').animate({
            top: '-300px'
        }, 500);
    },
    showTop: function () {
        $('.toppanel').animate({
            top: '0'
        }, 500);
        $('#userbar').animate({
            top: '-65px'
        }, 400);
    },
    hideTop: function () {
        $('.toppanel').animate({
            top: '-100%'
        }, 500);
        $('#userbar').animate({
            top: '0'
        }, 400);
    },
};