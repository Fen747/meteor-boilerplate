if ( Meteor.isClient ) {
	window.size = new ReactiveDict("window.size");
	window.addEventListener( "resize", f => {
	  window.size.set( "width", window.innerWidth );
	  window.size.set( "height", window.innerHeight );
	  window.size.set( "ratio", ( window.innerWidth / window.innerHeight ) );
	});
	window.size.set( "width", window.innerWidth );
	window.size.set( "height", window.innerHeight );
}