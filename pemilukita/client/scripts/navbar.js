Template.navbar.created = function () {};
Template.navbar.rendered = function () {};
Template.navbar.events({
    
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