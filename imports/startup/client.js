import { mobileViewSize, urlify, tryReach } from "/imports/library/utilities.js";
import appContext from "/imports/library/appContext/client";

document.removeElement = id => {
  const elem = document.getElementById( id );
  return ( elem && elem.parentNode.removeChild( elem ) );
};
global.log = arg => ( console.log( arg ), arg );

let _retry_interval_id;

Meteor.startup( f => {
  /** Hide splashscreen on cordova when possible
  if ( Meteor.isCordova && tryReach( navigator, 'splashscreen', 'hide').value ) {
    navigator.splashscreen.hide();
  }
  */

  /** Prevent any routing before all roles can be safely checked
  Tracker.autorun( computation => {
    if ( Roles.subscription.ready() && !FlowRouter._initialized ) {
      FlowRouter.initialize();
      computation.stop();
    }
  });
  */

  if ( Meteor.isCordova ) {
    endLoadingScreen();

    document.addEventListener('deviceready', f => ( CordovaDeviceIsReady.set( true ) ), false);

    /** Use to mark users using cordova
    Accounts.onLogin( f => Meteor.call("using-cordova") );
    */

    /** Use to alert users when a new version is available on cordova
    Tracker.autorun( computation => {
      if ( Reload.isWaitingForResume() ) {
        Bert.defaults.hideDelay = 15000;
        Bert.alert({
          title   : "New version available",
          message : "It will be downloaded automatically next time you start the app",
          type	  : "info"
        });
        Bert.defaults.hideDelay = 7500;
      }
    });
    */
  }

  Tracker.autorun( computation => {
    const appStatus = Meteor.status();
    const status = appStatus.status;
    const retryTime = appStatus.retryTime;

    if ( status === "connected" || status === "connecting" ) {
      Meteor.clearInterval( _retry_interval_id );
    } else {
      _retry_interval_id = Meteor.setInterval( f => {
        const time = Math.ceil( ( retryTime - ( new Date() ).getTime() ) / 1000 );

        appContext.set( 'retryTime', time );
      }, 500);
    }

    if ( Meteor.isProduction ) {
      console.log( "[APP_STATUS] ::: " + status );
    }
  });

  /** Disable logs for mizzao:timesync
  TimeSync.loggingEnabled = false;
  */
});