'use strict';

/**
* FUNCTION: midrange( arr[, sorted] )
*	Computes the midrange of a numeric array.
*
* @param {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input array
* @param {Boolean} [sorted=false] - boolean flag indicating if the input array is already sorted in ascending order
* @returns {Number|Null} midrange or null
*/
function midrange( arr, sorted ) {
	var len = arr.length,
		val,
		min,
		max;
	if ( !len ) {
		return null;
	}
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
