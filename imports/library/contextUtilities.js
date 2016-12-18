export const isClient = ( cbk ) => {
  if ( Meteor.isClient && cbk ) {
   return ( cbk() );
  }
  return ( Meteor.isClient );
};

export const isServer = ( cbk ) => {
  if ( Meteor.isServer && cbk ) {
   return ( cbk() );
  }
  return ( Meteor.isServer );
};

export const isCordova = ( cbk ) => {
  if ( Meteor.isCordova && cbk ) {
    return ( cbk() );
  }
  return ( Meteor.isCordova );
};

export const isDevelopment = ( cbk ) => {
  if ( Meteor.isDevelopment && cbk ) {
    return ( cbk() );
  }
  return ( Meteor.isDevelopment );
};

export const isProduction = ( cbk ) => {
  if ( !Meteor.isDevelopment && cbk ) {
    return ( cbk() );
  }
  return ( !Meteor.isDevelopment );
};