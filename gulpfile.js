var gulp        	= require('gulp'),
    browserify  	= require('browserify'),
    reactify    	= require('reactify'),
    watchify    	= require('watchify'),
    sass        	= require('gulp-ruby-sass'),
    autoprefixer 	= require('gulp-autoprefixer'),
    minifyCSS		= require('gulp-minify-css'),
    uglify          = require('gulp-uglify'),
    source          = require('vinyl-source-stream'),
    streamify       = require('gulp-streamify');

var config = {
    browserify_entry: './lib/browser.js',
    browserify_dest: './public/js',
    sass_entry: './lib/scss/style.scss',
    sass_dest: './public/css',
    scss_location: './lib/scss/**/*.scss',
    react_components_location: './lib/react/components/**/*.js'
};

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: [config.browserify_entry],
        transform: [reactify],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    var bundle = bundler.bundle();
    bundle.pipe(source('browser.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(config.browserify_dest));
});

//Preprocess .scss SASS files
gulp.task('scss', function() {
	console.log('Building, prefixing, and minifying stylesheets..');
	return sass('lib/scss/style.scss', {sourcemap: true})
		.pipe(autoprefixer({
			browser: ['last two versions']
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('public/css'));
	console.log('Done scss task');
});

gulp.task('watch', function() {
    console.log('Now watching for react changes');
    gulp.watch(config.react_components_location, ['browserify']);
    console.log('Now watching for scss changes');
    gulp.watch(config.scss_location, ['scss']);
});

gulp.task('default', ['scss', 'browserify'], function() {

});
