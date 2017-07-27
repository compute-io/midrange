Mid-range
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [mid-range](http://en.wikipedia.org/wiki/Mid-range) (mid-extreme) of a numeric array.

The __mid-range__, or __mid-extreme__, is the arithmetic mean of the maximum and minimum values in a data set. It is the midpoint of the range and a measure of central tendency.


## Installation

``` bash
$ npm install compute-midrange
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var midrange = require( 'compute-midrange' );
```

#### midrange( arr[, sorted] )

Computes the mid-range of a numeric `array`.

``` javascript
var unsorted = [ 8, 2, 3, 9, 5, 1, 4, 100, 7, 0, 6 ];

var midr = midrange( unsorted );
// returns 50
```

If the input `array` is already `sorted` in __ascending__ order, set the optional second argument to `true`.

``` javascript
var sorted = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100 ];

var midr = midrange( sorted, true );
// returns 50
```

## Notes

If the input `array` is empty, returns `NaN`.


## Examples

``` javascript
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
    data[ i ] = Math.round( Math.random()*100 );
}

console.log( midrange( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Rebekah Smith.


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
