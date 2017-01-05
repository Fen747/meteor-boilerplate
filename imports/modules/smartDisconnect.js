/**
 * Credits: mixmaxhq
 * Inspired from https://github.com/mixmaxhq/meteor-smart-disconnect
 */

let _disconnectTime = 5 * 60 * 1000;
let _disconnectTimer = null;

const _disconnectIfHidden = cbk => {
  _removeDisconnectTimeout();

  if ( document.hidden ) {
  	_createDisconnectTimeout( cbk );
  } else Meteor.reconnect();
};

const _createDisconnectTimeout = cbk => {
  _removeDisconnectTimeout();
  _disconnectTimer = setTimeout( f => {
  	cbk();
  	Meteor.disconnect();
  }, _disconnectTime );
}

const _removeDisconnectTimeout = f => {
  if ( _disconnectTimer ) clearTimeout( _disconnectTimer);
}

// The callback 'cbk' is called just before the disconnection occurs
export const SmartDisconnect = {
	start({ timeBeforeDisconnect = 300, activateOnCordova = true } = {}, cbk ){
		const disconnectFunctionWithCbk = f => ( _disconnectIfHidden( cbk ) );

		_disconnectTime = timeBeforeDisconnect;
		Meteor.startup( disconnectFunctionWithCbk );
		document.addEventListener('visibilitychange', disconnectFunctionWithCbk );

		if ( Meteor.isCordova && activateOnCordova ) {
		  document.addEventListener('resume', Meteor.reconnect );
		  document.addEventListener('pause', f => ( _createDisconnectTimeout( cbk ) ) );
		}
	}
};