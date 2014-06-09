Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'app',
        onBeforeAction: function () {

        },
        onAfterAction: function () {
            Meteor.subscribe('CandidateVotes');
            
        }
    })
    this.route('about');
    this.route('socialanalytic');
    this.route('news',{
        path: '/berita',
        template: '',
        onBeforeAction: function () {},
        onAfterAction: function () {}
    });
});