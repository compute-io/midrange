'use strict';

/**
* FUNCTION: midrange( arr, clbk[, sorted] )
*	Computes the midrange of an array using an accessor function.
*
* @param {Array} arr - input array
* @param {Function} clbk - accessor function for accessing array values
* @param {Boolean} [sorted=false] - boolean flag indicating if the input array is already sorted in ascending order
* @returns {Number|Null} midrange or null
*/
function midrange( arr, clbk, sorted ) {
	var len = arr.length,
		val,
		min,
		max;
	if ( !len ) {
		return null;
	}
	if ( sorted ) {
		min = clbk( arr[ 0 ], 0 );
		max = clbk( arr[ len - 1 ], len - 1 );
	} else {
		// Find min and max values in the range...
		min = clbk( arr[ 0 ], 0 );
		max = clbk( arr[ 0 ], 0 );
		for ( var i = 1; i < len; i++) {
			val = clbk( arr[ i ], i );
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
