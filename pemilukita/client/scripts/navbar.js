Template.navbar.created = function () {};
Template.navbar.rendered = function () {};
Template.navbar.events({
    'click #btnLogin': function () {
        Meteor.loginWithGoogle(function (err) {
            if (err)
                alert(err.message);
        });
    }
});