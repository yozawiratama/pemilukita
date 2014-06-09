Hyperbox = {
    show: function (elm) {
        $(elm).css('opacity', '1');
        $(elm).css('pointer-events', 'auto');
    },
    hide: function (elm) {
        $(elm).css('opacity', '0');
        $(elm).css('pointer-events', 'none');
    }
};