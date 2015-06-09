/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	midrange = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor midrange', function tests() {

	it( 'should export a function', function test() {
		expect( midrange ).to.be.a( 'function' );
	});

	it( 'should compute the midrange using an accessor', function test() {
		var data, expected;

		data = [
			{'x':3},
			{'x':4},
			{'x':5},
			{'x':2},
			{'x':8},
			{'x':2}
		];
		expected = 5;

		assert.strictEqual( midrange( data, getValue ), expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should compute the midrange using an accessor for a sorted array', function test() {
		var data, expected;

		data = [
			{'x':2},
			{'x':2},
			{'x':3},
			{'x':4},
			{'x':5},
			{'x':8}
		];
		expected = 5;

		assert.strictEqual( midrange( data, getValue, true ), expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( midrange( [], getValue ) );

		function getValue( d ) {
			return d.x;
		}
	});

});
