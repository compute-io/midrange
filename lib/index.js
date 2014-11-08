/**
*
*	COMPUTE: midrange
*
*
*	DESCRIPTION:
*		- Computes the midrange of a numeric array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

'use strict';

// FUNCTIONS //

/**
* FUNCTION: midrange( arr[, sorted] )
*	Computes the midrange of a numeric array.
*
* @param {Array} arr - numeric array
* @param {Boolean} [sorted] - boolean flag indicating if the input array is already sorted in ascending order
* @returns {Number} midrange
*/
function midrange( arr, sorted ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'midrange()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 && typeof sorted !== 'boolean') {
		throw new TypeError( 'midrange()::invalid input argument. Sorted should be a boolean.' );
	}
	var len = arr.length,
		val,
		min,
		max;

	if ( sorted ) {
		min = arr[ 0 ];
		max = arr[ len - 1 ];
	} else {
		// Find min and max values in the range...
		min = arr[ 0 ];
		max = arr[ 0 ];
		for ( var i = 1; i < len; i++) {
			val = arr[ i ];
			if ( val > max ) {
				max = val;
			}
			else if ( val < min ) {
				min = val;
			}
		}
	}
	return ( min + max ) / 2.0;
} // end FUNCTION midrange()

// EXPORTS //

module.exports = midrange;

