# grunt-svg2png [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Generate PNG from SVG using [svg2png](https://github.com/domenic/svg2png)


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install --save-dev morganestes/grunt-svg2png
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg2png');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*


[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


## Motivation
This is a fork of [pascalduez/grunt-svg2png](https://github.com/pascalduez/grunt-svg2png) that enables saving files outside
of the source directory, and provides the ability to add text to the filename when generating a PNG (e.g. 'filename.png' and 'filename@2x.png').

The plugin relies on [svg2png](https://github.com/domenic/svg2png) for processing files.

## Documentation
See the [Gruntfile](Gruntfile.js) in this repo for a full example.

### Example config

```js
grunt.initConfig({
  svg2png: {
	all: {
		files: [{
				cwd: 'assets/images/src/',
				expand: true,
				src: '**/*.svg',
				dest: 'assets/images/'
				}]
	},
	retina: {
		options: {
			scale: 2.0,
			suffix: '@2x' //generates 'filename@2x.png'
		},
		files: [{
				cwd: 'assets/images/src/',
				expand: true,
				src: '**/*.svg',
				dest: 'assets/images/'
			}]
		}
	}
});

grunt.loadNpmTasks("grunt-svg2png");
grunt.registerTask("default", ["svg2png"]);
```

*Tip: the [grunt-newer](https://github.com/tschaub/grunt-newer) module might come in handy if you have a large number of files.*

## License

[unlicence](UNLICENSE)
