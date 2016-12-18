/**
 * Array methods
 */
export const filter = ( array, iteratee ) => array.filter( iteratee );
export const push = ( array, item ) => array.push( item );
export const map = ( array, iteratee ) => array.map( iteratee );
export const reduce = array => array.reduce( iteratee );
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
export const update = ( coll, selector = {}, modifier, multi = false ) => coll.update( selector, modifier, { multi } );
export const find = ( coll, selector = {}, projection = {} ) => coll.find( selector, projection );
export const findOne = ( coll, selector = {}, projection ={} ) => coll.findOne( selector, projection );
export const fetch = ( ...args ) => find.apply( this, args ).fetch();
export const count = ( ...args ) => find.apply( this, args ).count();
export const remove = ( coll, selector ) => coll.remove( selector );
export const insert = ( coll, fields ) => coll.insert( fields );
export const aggregate = ( coll, pipes ) => coll.aggregate( pipes );

/**
 * Text methods
 */
export const getNbWord = str => filter( split( str, /[\s\n]/ ), word => word && word != " " ).length;
export const split = ( text, pattern ) => text.split( pattern );

/**
 * Date methods
 */
export const timestamp = date => date.getTime();
export const now = f => Date.now();
export const today = f => {
	const date = new Date();
	date.setHours(0,0,0,0);
	return ( date );
};
export const getXDayBefore = ( nbDay, date = new Date() ) => {
	const newDate = new Date( date );
	newDate.setDate( date.getDate() - nbDay );
	newDate.setHours(0,0,0,0);
	return ( newDate );
};
global.getXDayBefore = getXDayBefore;
export const startOfTheWeek = date => {
	if ( !date ) {
		date = today();
	}

	const day = date.getDay();
	const diff = date.getDate() - day;
	const firstDayOfTheWeek = new Date( date.setDate( diff ) );

	firstDayOfTheWeek.setHours(0,0,0,0);

  return ( firstDayOfTheWeek );
};

/**
 * Number methods
 */
export const floor = n => Math.floor( n );
export const isOdd = n => !!( n % 2 );
export const getPct = ( numerator, denominator ) => numerator / denominator;
export const fixedDec = ( number, nDec = 1 ) => Number( number.toFixed( nDec ) );

/**
 * URL methods
 */
export const withoutQueryParams = url => url.split('?')[0]