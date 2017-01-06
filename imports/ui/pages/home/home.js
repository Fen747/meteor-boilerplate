Template.home.onCreated( function() {
	this.maVar = new ReactiveVar(  );
});

Template.home.onRendered( function() {
	
});

Template.home.helpers({
	helper () {
		
		return ( true );
	}
});

Template.home.events({
	'click #js-create-conv': function ( event, instance ) {
  	Meteor.call("createConversation", ( error, response ) => {} );
	}
});

Template.home.onDestroyed( function() {
	
});