/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	midrange = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array midrange', function tests() {

	it( 'should export a function', function test() {
		expect( midrange ).to.be.a( 'function' );
	});

	it( 'should compute the midrange', function test() {
		var data, expected;

		data = [ 3, 4, 5, 2, 8, 2 ];
		expected = 5;

		assert.strictEqual( midrange( data ), expected );
	});

	it( 'should compute the midrange for a sorted array', function test() {
		var data, expected;

		data = [ 2, 2, 3, 4, 5, 8 ];
		expected = 5;

		assert.strictEqual( midrange( data, true ), expected );
	});


	it( 'should return null if provided an empty array', function test() {
		assert.isNull( midrange( [] ) );
	});

});
