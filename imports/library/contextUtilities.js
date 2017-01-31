export const onClient = cbk => ( Meteor.isClient && cbk ? cbk() : Meteor.isClient );
export const onServer = cbk => ( Meteor.isServer && cbk ? cbk() : Meteor.isServer );
export const onCordova = cbk => ( Meteor.isCordova && cbk ? cbk() : Meteor.isCordova );
export const onDevelopment = cbk => ( Meteor.isDevelopment && cbk ? cbk() : Meteor.isDevelopment );
export const onProduction = cbk => ( Meteor.isProduction && cbk ? cbk() : Meteor.isProduction );
export const isAdmin = ( uid, cbk ) => ( cbk && Roles && Roles.userIsInRole( uid, ['admin'] ) ? cbk() : Roles.userIsInRole( uid, ['admin'] ) );
