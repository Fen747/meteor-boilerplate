// Use lodash rather than underscore
_ = lodash;

// Modify the Meteor.user function so that it can :
// - get another user document by _id
// - automaticaly filter the doc fields to reduce the number of re-render triggers to the strict minimum
// as Meteor.user send all the document by default, which is quite bad for performance and debugging
Meteor._user = Meteor.user;
Meteor.user = ( arg1, arg2 ) => {
	let uid;
	let fields = [];
	let projection = {};

	if ( arg1 ) {

		if ( typeof arg1 === "string" ) {
			uid = arg1;

			if ( arg2 && Array.isArray( arg2 ) ) {
				fields = arg2;
			}
		} else if ( Array.isArray( arg1 ) ) {
			uid = Meteor.userId()
			fields = arg1;
		}

		if ( fields && fields.length ) {
			projection.fields = {};
			fields.forEach( str => ( projection.fields[ str ] = true ) );
		}

		return Meteor.users.findOne( uid, projection );
	}
	return ( Meteor._user() );
};