if (Meteor.isClient) {

  Template.hello.helpers({
    cantidad: function () {
      var q = Session.get('cantidad') || 0;
      return q;
    }
  });

  Template.hello.events({
    'click button': function () {
      var q = Session.get('cantidad') || 0;
      Session.set('cantidad', q + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
