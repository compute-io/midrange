Mid-range
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [mid-range](http://en.wikipedia.org/wiki/Mid-range) (mid-extreme) of a numeric array.

The __mid-range__, or __mid-extreme__, is the arithmetic mean of the maximum and minimum values in a data set. It is the midpoint of the range and a measure of central tendency. It is defined as

<div class="equation" align="center" data-raw-text="M=\frac{ x_{(N)} + x_{(1)} }{2}." data-equation="eq:midrange">
	<img src="https://cdn.rawgit.com/compute-io/midrange/a7b170caec560a62312238241109d3d483ae0ad6/docs/img/eqn1.svg" alt="Equation for mid-range.">
	<br>
</div>

where `x_{(N)}` is the maximum and `x_{(1)}` is the minimum value.

## Installation

``` bash
$ npm install compute-midrange
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var midrange = require( 'compute-midrange' );
```

#### midrange( x[, opts] )

Computes the [mid-range](http://en.wikipedia.org/wiki/Mid-range). `x` may be either an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or [`matrix`](https://github.com/dstructs/matrix).


``` javascript
var unsorted = [ 8, 2, 3, 9, 5, 1, 4, 100, 7, 0, 6 ];

var midr = midrange( unsorted );

unsorted = new Int8Array( unsorted );
midr = midrange( data );
// returns 50
```

If the input `array` is already `sorted` in __ascending__ order, set the optional `sorted` option to `true`.

``` javascript
var sorted = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100 ];

var midr = midrange( sorted, {
	'sorted': true
});
// returns 50
```

For non-numeric `arrays`, provide an accessor `function` for accessing numeric `array` values.

``` javascript
var data = [
    {'x':2},
    {'x':4},
    {'x':5},
    {'x':3},
    {'x':4},
    {'x':3},
    {'x':1},
    {'x':5},
    {'x':6},
    {'x':9}
];

function getValue( d ) {
    return d.x;
}

var midr = midrange( data, {
	'accessor': getValue
});
// returns 5
```

If provided a [`matrix`](https://github.com/dstructs/matrix), the function accepts the following additional `options`:

*	__dim__: dimension along which to compute the [midrange](http://en.wikipedia.org/wiki/Mid-range). Default: `2` (along the columns).
*	__dtype__: output [`matrix`](https://github.com/dstructs/matrix) data type. Default: `float64`.

By default, the function computes the [midrange](http://en.wikipedia.org/wiki/Mid-range) along the columns (`dim=2`).

``` javascript
var matrix = require( 'dstructs-matrix' ),
	data,
	mat,
	midr,
	i;

data = new Int8Array( 25 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i;
}
mat = matrix( data, [5,5], 'int8' );
/*
	[  0  1  2  3  4
	   5  6  7  8  9
	  10 11 12 13 14
	  15 16 17 18 19
	  20 21 22 23 24 ]
*/

midr = midrange( mat, {
	'sorted': true
});
/*
	[  2
	   7
	   12
	   17
	   22 ]
*/
```

Set `sorted` equal to `true` when the individual rows or columns are already sorted in ascending order.

To compute the [midrange](http://en.wikipedia.org/wiki/Mid-range) along the rows, set the `dim` option to `1`.

``` javascript
midr = midrange( mat, {
	'dim': 1
});
/*
	[ 10, 11, 12, 13, 14 ]
*/
```

By default, the output [`matrix`](https://github.com/dstructs/matrix) data type is `float64`. To specify a different output data type, set the `dtype` option.

``` javascript
midr = midrange( mat, {
	'dim': 1,
	'dtype': 'uint8'
});
/*
	[ 10, 11, 12, 13, 14 ]
*/

var dtype = midr.dtype;
// returns 'uint8'
```

If provided a [`matrix`](https://github.com/dstructs/matrix) having either dimension equal to `1`, the function treats the [`matrix`](https://github.com/dstructs/matrix) as a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) and returns a `numeric` value.

``` javascript
data = [ 2, 4, 5, 3, 4, 3, 1, 5, 6, 9  ];

// Row vector:
mat = matrix( new Int8Array( data ), [1,10], 'int8' );
midr = midrange( mat );
// returns 5

// Column vector:
mat = matrix( new Int8Array( data ), [10,1], 'int8' );
midr = midrange( mat );
// returns 5
```

If provided an empty [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or [`matrix`](https://github.com/dstructs/matrix), the function returns `null`.

``` javascript
midr = midrange( [] );
// returns null

midr = midrange( new Int8Array( [] ) );
// returns null

midr = midrange( matrix( [0,0] ) );
// returns null

midr = midrange( matrix( [0,10] ) );
// returns null

midr = midrange( matrix( [10,0] ) );
// returns null
```

## Examples

``` javascript
var matrix = require( 'dstructs-matrix' ),
	midrange = require( 'compute-midrange' );

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

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/compute-midrange.svg
[npm-url]: https://npmjs.org/package/compute-midrange

[travis-image]: http://img.shields.io/travis/compute-io/midrange/master.svg
[travis-url]: https://travis-ci.org/compute-io/midrange

[coveralls-image]: https://img.shields.io/coveralls/compute-io/midrange/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/midrange?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/midrange.svg
[dependencies-url]: https://david-dm.org/compute-io/midrange

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/midrange.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/midrange

[github-issues-image]: http://img.shields.io/github/issues/compute-io/midrange.svg
[github-issues-url]: https://github.com/compute-io/midrange/issues
