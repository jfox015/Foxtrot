// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var cssPath = './public/css/';
	
// Define tasks after requiring dependencies
const processSass = (done) => {
        gulp
            .src(cssPath + '/**/*.scss')
            .pipe(sass().on('error', sass.logError))
	        .pipe(sourcemaps.init())
	        .pipe(nano())
	        .pipe(sourcemaps.write())
	        .pipe(rename({suffix: '.min'}))
	        .pipe(gulp.dest('./public/css'));
	    done();
}


const cleancss = (done) => {
    	gulp
        	.src(cssPath + '**/*.css', {read: false})
        	.pipe(clean());
        done();
}

const defaultTask = (done) => {
  // place code for your default task here
  done();
}
// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.runsass = gulp.series(cleancss, processSass);
exports.default = defaultTask;