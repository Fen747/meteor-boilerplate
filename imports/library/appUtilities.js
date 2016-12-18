export const getEmailfromUid = function ( uid ) {
  const user = Meteor.users.findOne( uid, { fields: { emails: true } } );

  return (
    user &&
    user.emails &&
    user.emails[ 0 ] &&
    user.emails[ 0 ].address
  );
};

export const secure = collection => {
  if ( Meteor.isDevelopment ) {
    collection.allow({
      insert  : () => true,
      update  : () => true,
      remove  : () => true
    });
    collection.deny({
      insert  : () => false,
      update  : () => false,
      remove  : () => false
    });
  } else {
    collection.allow({
      insert  : () => false,
      update  : () => false,
      remove  : () => false
    });
    collection.deny({
      insert  : () => true,
      update  : () => true,
      remove  : () => true
    });
  }
};

// Use this function to end an injected loading screen
export const endLoadingScreen = f => document.removeElement( "loading-screen" );

export const playAnimation = ( animationName, elementId, animationTime = 1000 ) => {
  const el = document.getElementById( elementId );

  el.classList.add( 'animated' );
  el.classList.add( animationName );

  setTimeout( f => {
    el.classList.remove( 'animated' );
    el.classList.remove( animationName );
  }, animationTime );
};