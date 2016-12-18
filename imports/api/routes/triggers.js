import { endLoadingScreen } from "/imports/library/appUtilities.js";

export default Triggers = {
  mustBe: {},
  mustNotBe: {}
};

let timeoutId = null;

Triggers.mustBe.loggedIn = ( context, redirect ) => {
  if ( Meteor.isClient ) {
    if ( !( Meteor.loggingIn() || Meteor.userId() ) ) {
      console.log("[ROUTER] ::: redirect from 'loggedIn' trigger");

      /** detect utm campaign
      if ( context.path.slice(0, 5) == "/?utm" ) {
        GAnalytics.pageview( context.path );
      }
      */

      endLoadingScreen();
      redirect('/splash');
    }
  }
};

Triggers.mustNotBe.loggedIn = ( context, redirect ) => {
  if ( Meteor.isClient ) {
    if ( Meteor.loggingIn() || Meteor.userId() ) {
      console.log("[ROUTER] ::: redirect from '! loggedIn' trigger");

      FlowRouter.go('/');
    }
  }
};

Triggers.mustNotBe.blocked = ( context, redirect ) => {};

Triggers.noInfLoad = (  ) => {
  if ( Meteor.isClient ) {
    if ( timeoutId ) {
      clearTimeout( timeoutId );
    }
    timeoutId = setTimeout( f => {
      endLoadingScreen();
      NProgress.done();
    }, ( 6.66 * 1000 ) );
  }
};

Triggers.trackMe = ( context, redirect ) => {
  if ( Meteor.isClient ) {
    Meteor.call("trackMe", context.path);

    /** To use with package okgrow:analytics to track users
    const page = {};

    if (context.path) {
      page.path = context.path;
    }
    if (context.context && context.context.title) {
      page.title = context.context.title;
    }

    page.url = window.location.origin + page.path;

    if (context.route && context.route.name) {
      page.name = context.route.name;
    } else {
      page.name = page.path;
    }
    if (context.context && context.context.querystring) {
      page.search = `? ${context.context.querystring}`;
    } else {
      page.search = "";
    }
    if (FlowRouter.lastRoutePath) {
      page.referrer = window.location.origin + FlowRouter.lastRoutePath;
    } else {
      page.referrer = document.referrer;
    }
    FlowRouter.lastRoutePath = page.path;

    if(Meteor.isCordova){
      page.isCordova = true;
      analytics.page( page.name + "&&isCordova", page );
    } else {
      analytics.page( page.name, page );
    }
  */
  }
};
