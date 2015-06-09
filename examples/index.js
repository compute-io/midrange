'use strict';

var matrix = require( 'dstructs-matrix' ),
	midrange = require( './../lib' );

var data,
	mat,
	midr,
	i;


// ----
// Plain arrays...
data = new Array( 1000 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}
midr = midrange( data );
console.log( 'Arrays: %d\n', midr );
// A uniform distribution should have an excess midrange around -1.2.

// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
midr = midrange( data, {
	'accessor': getValue
});
console.log( 'Accessors: %d\n', midr );


// ----
// Typed arrays...
data = new Int32Array( 1000 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}
midr = midrange( data );
console.log( 'Typed arrays: %d\n', midr );


// ----
// Matrices (along rows)...
mat = matrix( data, [100,10], 'int32' );
midr = midrange( mat, {
	'dim': 1
});
console.log( 'Matrix (rows): %s\n', midr.toString() );


// ----
// Matrices (along columns)...
midr = midrange( mat, {
	'dim': 2
});
console.log( 'Matrix (columns): %s\n', midr.toString() );


// ----
// Matrices (custom output data type)...
midr = midrange( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', midr.dtype, midr.toString() );
