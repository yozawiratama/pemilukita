Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'app',
        onBeforeAction: function () {

        },
        onAfterAction: function () {
            Meteor.subscribe('CandidateVotes');
            Meteor.subscribe('ReasonVotes');
        }
    })
    this.route('about');
});