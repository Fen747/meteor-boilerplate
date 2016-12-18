<h1>Meteor Boilerplate</h1>
	<h4>A Meteor ready-to-use app for Blaze + FlowRouter with a bunch of useful functions</h4>
	<p>
		GitHub repository : <a href="https://github.com/AlainRo/meteor-multd3/issues/1">https://github.com/Fen747/meteor-boilerplate</a>
	</p>
	<p>
		by <span class="bold">David Panart</span> aka. <span class="bold">Fen747</span>
	</p>
	<p>
		Feel free to fork this repository.
		<br>
		Don't forget to star it too if you find it cool!
	</p>
	<hr>
	<h2>Doc</h2>
	<h3>Packages ( /.meteor/packages )</h3>
	<ul>
		<li>A bunch of very useful packages are either pre-installed or just need to be uncommented to be installed in your app</li>
	</ul>
	<h3>API ( /imports/api )</h3>
	<h4>Routes  ( /imports/api/routes )</h4>
	<ul>
		<li>config.js - Set you routes hierachy and triggers here. Use updateView to instead of BlazeLayout.Render to handle your transition animations</li>
		<li>triggers.js - Define the triggers here</li>
		<li>routes.js - Define each route here</li>
	</ul>
	<h4>Collections ( /imports/api/collections )</h4>
	<ul>
		<li>Store your collections global collections at /imports/api/collections</li>
		<li>Store your client only minimongo instances in ./client</li>
		<li>Store your private collections in ./server</li>
	</ul>
	<h4>Methods  ( /imports/api/methods )</h4>
	<ul>
		<li>Store your optimistic methods at /imports/api/collections</li>
		<li>Store your server only methods at ./server</li>
	</ul>
	<h3>Library ( /imports/library )</h3>
	<h4>App context ( /imports/library/appContext )</h4>
	<ul>
		<li>Using Session or any globally defined variable is not a good thing. You should rather use the appContext as a reactiveDict instead of Session</li>
	</ul>
	<h4>App utilities ( /imports/library/appUtilities.js )</h4>
	<ul>
		<li><span class="bold">getEmailfromUid</span>( userId ) - use this to get the first mail from a user</li>
		<li><span class="bold">secure</span> - use this to automatically deny all writing permissions for the user in production</li>
		<li><span class="bold">endLoadingScreen</span> - great to remove loading screen you could have injected via Arunoda's initial inject package</li>
		<li><span class="bold">playAnimation</span>( animationName, elementId, animationTime = 1000 ) - play an animation on an element adding by adding it a class and removing it automatically after 'animationTime' ms</li>
	</ul>
	<h4>Blaze helpers ( /imports/library/blazeHelpers.js )</h4>
	<ul>
		<li><span class="bold">userConnected</span> - use this handlebar helper to check if a userId exists</li>
		<li><span class="bold">lineBreakText</span> - Automatically tranform \n  of a string as br elements in the dom. Use with triple braces</li>
		<li><span class="bold">urlify</span>( str ) - make a string valid as a url. Great for passing post titles in the url for example</li>
		<li><span class="bold">mobileViewSize</span> - check if the window width is lesser than 601 (based on materializecss standard media queries)</li>
		<li><span class="bold">getUserName</span>( uid ) - get a user's name based on his uid</li>
		<li><span class="bold">equals</span>( a, b ) - return true is both arguments are equals</li>
		<li><span class="bold">nequals</span>( a, b ) - return true is both arguments are not equals</li>
		<li><span class="bold">logContext</span>( context = this ) - log the passed context or this</li>
		<li><span class="bold">getEmailfromUid</span>( userId ) - use this to get the first mail from a user</li>
		<li><span class="bold">isCordova</span> - return true if is on a cordova device</li>
	</ul>
	<h4>Context utilities ( /imports/library/contextUtilities.js )</h4>
	<ul>
		<li>A bunch of functions return a meteor flag and taking an optionnal calllback to execute if the flag is set to true</li>
		<li>isClient, isServer, isCordova, isDevelopment, isProduction</li>
	</ul>
	<h4>Functional Programming ( /imports/library/funcProg.js )</h4>
	<ul>
		<li>A bunch of ES6 functions and aliases for functional programming</li>
		<li>Really useful in order to keep a DRY, easy to read and easy to debug code</li>
	</ul>
	<h4>Utilities ( /imports/library/utilities.js )</h4>
	<ul>
		<li><span class="bold">window.size</span> - a Reactive dict to make resizing the window reactive</li>
		<li><span class="bold">mobileViewSize</span> - check if the window width is lesser than 601 (based on materializecss standard media queries)</li>
		<li><span class="bold">urlify</span>( str ) - make a string valid as a url. Great for passing post titles in the url for example</li>
		<li><span class="bold">tryReach</span>( object, 'nestedAttribute1', 'nestedAttribute2', ... ) - a very useful function to naviguate in nested objects without throwing errors if an attribute is called on a non-object value</li>
		<li><span class="bold">buildRegExp</span>( str ) - a simple regexp builder</li>
		<li><span class="bold">benchmark</span> - a basic functions to check performances of a callback</li>
		<li><span class="bold">unblock</span> - an alias to ddp's this.unblock that do not throw an error when the method doesn't exists</li>
		<li><span class="bold">isValidImageUrl</span>( url ) - check if a url point to an image</li>
	</ul>
	<h3>Startup ( /imports/startup )</h3>
	<h4>Client ( /imports/startup/client.js )</h4>
	<ul>
		<li>Add a removeElement (by id) method to the document variable</li>
		<li>Add a log function to the global scope. Useful to log and return a variable without adding new lines to your files when debugging</li>
		<li>The startup callback has a lot of handful features to handle injected loading screens on cordova, defering the router init after roles are loaded, and following the connection state in the appContext</li>
	</ul>
	<h3>User Interface ( /imports/ui )</h3>
	<h4>Components ( /imports/ui/components )</h4>
	<ul>
		<li>Add your re-used components here</li>
	</ul>
	<h4>Layouts ( /imports/ui/layouts )</h4>
	<ul>
		<li>Add your layouts templates here</li>
	</ul>
	<h4>Modals ( /imports/ui/modals )</h4>
	<ul>
		<li>Add your modals templates here</li>
	</ul>
	<h4>Pages ( /imports/ui/pages )</h4>
	<ul>
		<li>Add your pages templates here</li>
	</ul>
	<h4>Stylesheets ( /imports/ui/stylesheets )</h4>
	<ul>
		<li>Add your CSS / SCSS / SASS / LESS files here</li>
	</ul>