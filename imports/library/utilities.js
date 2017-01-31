export const mobileViewSize = f => ( window.size.get("width") < 601 );

export const urlify = str => {
  const urltxt = ( str
  	.replace(/(^\-+|[^a-zA-Z0-9\/_| -]+|\-+$)/g, '')
	  .toLowerCase()
	  .replace(/[\/_| -]+/g, '-')
	 );

  return ( ( urltxt ) ? urltxt : "" );
};

export const tryReach = obj => {
  let i = 0,
      tmp = null;

  if ( !obj ) {
    return ({
      value       : undefined,
      maxReached  : obj
    });
  }

  while ( arguments[ ++i ] ) {
    if ( obj[ arguments[ i ] ] !== undefined ) {
      obj = obj[ arguments[ i ] ];
    } else {
      obj = null;
      return ({
        value       : undefined,
        maxReached  : arguments[ ( i - 1 ) ]
      });
    }
  }

  const res = ({
    value       : obj,
    maxReached  : arguments[ ( i - 1 ) ]
  });

  obj = null;

  return ( res );
};

export const buildRegExp = searchText => {
  const words = searchText.trim().split(/[ \-\:]+/),
      	exps = words.map( word => ( "(?=.*" + word + ")" ) ),
      	fullExp = exps.join('') + ".+";

  return ( new RegExp( fullExp, "i" ) );
};

export const arrayfy = arg => {
  if ( typeof arg === "string" ) {
    return ( [ arg ] );
  } else if ( Object.prototype.toString.call( arg ) == '[object Array]' ) {
    return arg;
  }
  return ( [] );
};

export const benchmark = ( cbk, iterations, desc ) => {
  if ( iterations && typeof iterations === 'number' ) {
    const start = new Date().getTime();
    let totalTime = 0;

    while ( iterations-- ) {
      cbk();
    }

    totalTime = new Date().getTime() - start;

    const time = ( totalTime / 1000 ),
        	averageTimeInMs = totalTime / iterations;

    if ( desc ) {
      console.log("[BENCHMARK] ::: " + desc );
    }
    console.log("[BENCHMARK] ::: Ended in " + time + "s" );
    console.log("[BENCHMARK] ::: Average time : " + averageTimeInMs + "ms" );

    return ({ time, averageTimeInMs });
  } else {
    console.log("[BENCHMARK] ::: Please, provide a number of iterations");
  }
};

export const unblock = ddp => {
  if ( ddp && ddp.unblock && typeof ddp.unblock === "function" ) {
    ddp.unblock();
  }
};

export const isValidImageUrl = ( url, cbk ) => {
	const img = new Image();

	img.onerror = function () { cbk( url, false ); };
	img.onload  = function () { cbk( url, true );  };
	img.src = url;
};