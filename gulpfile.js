var gulp        	= require('gulp'),
    browserify  	= require('browserify'),
    reactify    	= require('reactify'),
    watchify    	= require('watchify'),
    sass        	= require('gulp-ruby-sass'),
    autoprefixer 	= require('gulp-autoprefixer'),
    minifyCSS		= require('gulp-minify-css');

var config = {
    browserify_entry: './lib/browser.js',
    browserify_dest: './public/js',
    sass_entry: './lib/scss/style.scss',
    sass_dest: './public/css'
};

var bundler = browserify({
	entries: [config.browserify_entry],
	transform: [reactify],
	debug: true,
	cache: {},
	packageCache: {},
	fullPaths: true
});

gulp.task('browserify', function() {
	var watcher = watchify(bundler);
	return watcher.on('update', function() {
		console.log('Bundling..');
		watcher.bundle()
		.pipe(gulp.dest(config.browserify_dest));
		console.log('Done bundling.');
	});
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


gulp.task('watch', ['browserify', 'scss'], function() {
	console.log('Watching!');
});
