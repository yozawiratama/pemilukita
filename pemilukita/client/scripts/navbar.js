Template.navbar.created = function () {};
Template.navbar.rendered = function () {};
Template.navbar.events({
    'click #btnLogin': function () {
        Meteor.loginWithGoogle(function (err) {
            if (err)
                alert(err.message);
        });
    },
    'click #btnLogout': function () {
        Meteor.logout();
    }
});

Template.navbar.IsLoggedIn = function () {
    if (Meteor.userId()) return true;
};

Template.navbar.ActiveUsername = function () {
    if (Meteor.user()) return Meteor.user().profile.name;
};