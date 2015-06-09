'use strict';

// MODULES //

var isArrayLike = require( 'validate.io-array-like' ),
	isMatrixLike = require( 'validate.io-matrix-like' ),
	ctors = require( 'compute-array-constructors' ),
	matrix = require( 'dstructs-matrix' ).raw,
	validate = require( './validate.js' );


// FUNCTIONS //

var midrange1 = require( './array.js' ),
	midrange2 = require( './accessor.js' ),
	midrange3 = require( './matrix.js' );


// MIDRANGE //

/**
* FUNCTION: midrange( x[, opts] )
*	Computes the midrange.
*
* @param {Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} x - input value
* @param {Object} [opts] - function options
* @param {Function} [opts.accessor] - accessor function for accessing array values
* @param {Boolean} [opts.sorted] - boolean flag indicating if the input array is already sorted in ascending order
* @param {Number} [opts.dim=2] - dimension along which to compute the midrange.
* @param {String} [opts.dtype="float64"] - output data type
* @returns {Number|Matrix|Null} midrange value(s) or null
*/
function midrange( x, options ) {
	/* jshint newcap:false */
	var opts = {},
		shape,
		ctor,
		err,
		len,
		dim,
		dt,
		d,
		m,
		sorted;

	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	sorted = opts.sorted || false;
	if ( isMatrixLike( x ) ) {
		dt = opts.dtype || 'float64';
		dim = opts.dim;

		// Determine if provided a vector...
		if ( x.shape[ 0 ] === 1 || x.shape[ 1 ] === 1 ) {
			// Treat as an array-like object:
			return midrange1( x.data, sorted );
		}
		if ( dim > 2 ) {
			throw new RangeError( 'midrange()::invalid option. Dimension option exceeds number of matrix dimensions. Option: `' + dim + '`.' );
		}
		if ( dim === void 0 || dim === 2 ) {
			len = x.shape[ 0 ];
			shape = [ len, 1 ];
		} else {
			len = x.shape[ 1 ];
			shape = [ 1, len ];
		}
		ctor = ctors( dt );
		if ( ctor === null ) {
			throw new Error( 'midrange()::invalid option. Data type option does not have a corresponding array constructor. Option: `' + dt + '`.' );
		}
		// Create an output matrix and calculate the midranges:
		d = new ctor( len );
		m = matrix( d, shape, dt );
		return midrange3( m, x, sorted, dim );
	}
	if ( isArrayLike( x ) ) {
		if ( opts.accessor ) {
			return midrange2( x, opts.accessor, sorted );
		}
		return midrange1( x, sorted );
	}
	throw new TypeError( 'midrange()::invalid input argument. First argument must be either an array or a matrix. Value: `' + x + '`.' );
} // end FUNCTION midrange()


// EXPORTS //

module.exports = midrange;
