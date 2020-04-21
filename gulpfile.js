'use strict';
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync');

let path = {
    src_sass:'./src/scss/*.scss',
    src_js:'./src/js/main.js',
}

gulp.task("sassTask", function() {
    return gulp
        .src(path.src_sass)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({
          overrideBrowserslist: ['last 2 versions'],
          cascade: false
        }), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

// JS task: uglifies JS files to main.js
gulp.task('jsTask', function() {
    return gulp
      .src(path.src_js)
      .pipe(terser())
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
  });

// Static Server & watching scss/js/html files
gulp.task('serve', gulp.series('sassTask', function() {
    browserSync.init({
        server: "."   
    });
  
    gulp.watch(path.src_sass,
      gulp.series('sassTask'));

    gulp.watch(path.src_js,
      gulp.series("jsTask"));

    gulp.watch("*.html").on('change', browserSync.reload);
  }));
  
  gulp.task('default',
    gulp.series('sassTask', "jsTask", 'serve'));