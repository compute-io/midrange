/**
*
*	COMPUTE: midrange
*
*
*	DESCRIPTION:
*		- Computes the midrange for an array of numeric values. 
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
* @param {Boolean} sorted - optional argument to indicate pre-sorted input array 
* @returns {Number} midrange
*/
function midrange( arr, sorted ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'midrange()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 && typeof sorted !== 'boolean') {
			throw new TypeError( 'midrange()::invalid input argument. Sorted should be a boolean.' );
	} 

	var min = Number.POSITIVE_INFINITY,
		max = Number.NEGATIVE_INFINITY,
		len = arr.length;

	if ( sorted ) {
		return ( arr[0] + arr[len-1] ) / 2.0;
	}
	else{
		// Find min and max values in the range:
		for ( var i = 0; i < len; i++) {
			if ( arr[i] > max ) {
				max = arr[i];
			}
			if ( arr[i] < min ) {
				min = arr[i];
			}
		}
		return ( min + max ) / 2.0;
	}

} // end FUNCTION midrange()

// EXPORTS //

module.exports = midrange;

