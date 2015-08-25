/* global require:false */
var path = require( "path" );
var async = require( "async" );
var svg2png = require( "svg2png" );
var chalk = require( "chalk" );
var numCPUs = require( "os" ).cpus().length;

module.exports = function ( grunt ) {
	"use strict";

	grunt.registerMultiTask( "svg2png", "Convert SVG to PNG", function () {
		var options = this.options( {
			scale: 1.0,
			suffix: '',
			limit: Math.max( numCPUs, 2 )
		} );

		async.eachLimit( this.files, options.limit, function ( el, next ) {
			var pngFileName = path.basename( el.src, ".svg" ) + options.suffix.toString() + ".png";
			var destinationFile = path.join( el.orig.dest, pngFileName );

			svg2png( el.src, destinationFile, options.scale, function ( err ) {
				if ( err ) {
					grunt.log.error( "An error occurred converting %s in %s: %s", el.src, destinationFile, err );
				}
				else {
					grunt.log.writeln( chalk.green( "✔ " ) + destinationFile + chalk.gray( " (scale:", options.scale + ")" ) );
				}
				next();
			} );
		}, this.async() );
	} );
};
