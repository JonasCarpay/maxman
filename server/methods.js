Meteor.methods({
   createEditor: function(username, profile) {
      if (Meteor.userId()) {
         console.log("User " + username + " created by " + Meteor.userId());
         Accounts.createUser({
            username: username,
            password: username,
            profile: profile,
         });
      } else {
         console.log("Jo iemand hackt je");
      }
   }
});
