import Triggers from "./triggers";

if ( Meteor.isClient ) Meteor.startup( () => { BlazeLayout.setRoot('body'); });

const animationTime = 0; // in ms
let lastUsedLayout = "";

FlowRouter.notFound = {
  action(){
    BlazeLayout.render( 'mainLayout', { main: 'notFound' } );
  }
};

export const Routes = FlowRouter.group({
  name: "allRoutes",
  triggersEnter: [
    Triggers.noInfLoad,
    Triggers.mustNotBe.blocked
  ]
});

export const updateView = ( nextLayout, templates ) => {
  if ( Meteor.isClient && lastUsedLayout !== nextLayout ) {
  	// Handle you transition animation logic here

	  setTimeout( f => BlazeLayout.render( nextLayout, templates ), animationTime );
	  lastUsedLayout = nextLayout;
	} else {
	  BlazeLayout.render( nextLayout, templates );
	}
};
