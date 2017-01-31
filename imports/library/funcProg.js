/**
 * Local consts
 */
export const DBTimeZone = -1.00; // time zone value from database * -1
export const DBTimeZoneOffset = -60; // time zone value from database

/**
 * Chaining methods
 */
export const comp = ( ...funcs ) => ( reduce( ( res, func ) => func( res ) )( funcs ) );
export const pipe = ( funcs, init ) => ( reduce( ( res, func ) => func( res ) )( funcs )( init ) );

/**
 * Array methods
 */
export const filter = ( array, iteratee ) => array.filter( iteratee );
export const push = ( array, item ) => array.push( item );
export const map = ( array, iteratee ) => array.map( iteratee );
export const each = ( array, iteratee ) => array.forEach( iteratee );
export const reduce = func => array => init => array.reduce( func, init );
export const copy = array => EJSON.parse( JSON.stringify( array ) );
export const deepMerge = ( firstArray, secondArray, firstAttr, secondAttr ) => {
	const returnedArray = [];
	const copiedArray = copy( secondArray );

	map( firstArray, obj => {
		const valueToCheck = obj[ firstAttr ];
		const newObj = {};
		let firstFound = false;

		push( returnedArray, Object.assign( newObj, obj ) );

		if ( copiedArray.length ) {
			map( copiedArray, ( el, index ) => {
				if ( !firstFound && valueToCheck == copiedArray[ index ][ secondAttr || firstAttr ] ) {
					Object.assign( newObj, copiedArray[ index ] );
					firstFound = true;
				}
			} );
		}
	} );

	return ( returnedArray );
};

/**
 * Collection methods
 */
export const find = ( coll, selector = {}, projection = {} ) => coll.find( selector, projection );
export const fetch = ( ...args ) => find.apply( this, args ).fetch();
export const count = ( ...args ) => find.apply( this, args ).count();
export const insert = ( coll, fields ) => coll.insert( fields );
export const remove = ( coll, selector ) => coll.remove( selector );
export const update = ( coll, selector = {}, modifier, multi = false ) => coll.update( selector, modifier, { multi } );
export const findOne = ( coll, selector = {}, projection ={} ) => coll.findOne( selector, projection );
export const aggregate = ( coll, pipes ) => coll.aggregate( pipes );

/**
 * Text methods
 */
export const getNbWord = str => filter( split( str, /[\s\n]/ ), word => word && word != " " ).length;
export const split = ( text, pattern ) => text.split( pattern );

/**
 * Date methods
 */
export const timestamp = date => ( ( date && date.getTime() ) || now() );
export const now = f => Date.now();
export const today = ( date = new Date() ) => {
	date.setHours(0,0,0,0);
	return ( date );
};
export const getXDayBefore = ( nbDay, date = new Date() ) => {
	const newDate = new Date( date );
	newDate.setDate( date.getDate() - nbDay );
	newDate.setHours(0,0,0,0);
	return ( newDate );
};
export const startOfTheWeek = ( date = today() ) => {
	const day = date.getDay();
	const diff = date.getDate() - day;
	const firstDayOfTheWeek = new Date( date.setDate( diff ) );

	firstDayOfTheWeek.setHours(0,0,0,0);

  return ( firstDayOfTheWeek );
};
export const getDBTs = ( date = new Date() ) => ( timestamp( date ) - ( ( new Date().getTimezoneOffset() - DBTimeZoneOffset ) * 60 * 1000 ) );
export const getDBDate = ( date = new Date() ) => ( new Date( getDBTs( date ) ) );

/**
 * Number methods
 */
export const random = Math.random;
export const floor = Math.floor;
export const isOdd = n => !!( n % 2 );
export const getPct = ( numerator, denominator ) => ( numerator / denominator ) * 100;
export const fixedDec = ( number, nDec = 1 ) => Number( number.toFixed( nDec ) );

/**
 * URL methods
 */
export const withoutQueryParams = url => url.split('?')[0]