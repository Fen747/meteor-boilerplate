if ( Meteor.isClient ) {
	const _oldDdpSendFunc = Meteor.connection._stream.send;
	let _ddpLogState = false;

	Meteor.connection._stream.send = function(){
	  _oldDdpSendFunc.apply( this, arguments );
		if ( _ddpLogState ) console.log( arguments[0] );
	};

	Meteor.connection._stream.on( 'message', msg => _ddpLogState && console.log( msg ) );

	global.DDPLogging = {
		toggle: bool => _ddpLogState = bool ? !!bool : !_ddpLogState,
		get: f => _ddpLogState,
		_oldDdpSendFunc,
	};	
}