'use strict';

/**
* FUNCTION: midrange( out, mat[, sorted[, dim] ] )
*	Computes the midrange along a matrix dimension.
*
* @param {Matrix} out - output matrix
* @param {Matrix} mat - input matrix
* @param {Boolean} [sorted=false] - boolean flag indicating if the rows / columns are already sorted in ascending order
* @param {Number} [dim=2] - matrix dimension along which to compute the maximum. If `dim=1`, compute along matrix rows. If `dim=2`, compute along matrix columns.
* @returns {Matrix|Null} midrange or null
*/
function midrange( out, mat, sorted, dim ) {
	var val,
		max,
		min,
		M, N, o,
		s0, s1,
		i, j, k;

	if ( dim === 1 ) {
		// Compute along the rows...
		M = mat.shape[ 1 ];
		N = mat.shape[ 0 ];
		s0 = mat.strides[ 1 ];
		s1 = mat.strides[ 0 ];
	} else {
		// Compute along the columns...
		M = mat.shape[ 0 ];
		N = mat.shape[ 1 ];
		s0 = mat.strides[ 0 ];
		s1 = mat.strides[ 1 ];
	}
	if ( M === 0 || N === 0 ) {
		return null;
	}
	o = mat.offset;
	for ( i = 0; i < M; i++ ) {
		k = o + i*s0;
		if ( sorted ) {
			min = mat.data[ k ];
			max = mat.data[ k + (N-1)*s1 ];
		} else {
			// Find min and max values in the range...
			min = mat.data[ k ];
			max = mat.data[ k ];
			for ( j = 1; j < N; j++ ) {
				val = mat.data[ k + j*s1 ];
				if ( val > max ) {
					max = val;
				}
				else if ( val < min ) {
					min = val;
				}
			}
		}
		out.data[ i ] = ( min + max ) / 2.0;
	}
	return out;
} // end FUNCTION midrange()


// EXPORTS //

module.exports = midrange;
