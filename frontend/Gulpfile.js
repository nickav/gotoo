'use strict';

var fs = require('fs');

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cssnano = require('gulp-cssnano');
var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var inlinesource = require('gulp-inline-source');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');
var runSequence = require('run-sequence');
var webpack = require('webpack');


gulp.task('sass:lint', function() {
  gulp.src('./src/sass/*.scss')
    .pipe(plumber())
    .pipe(scsslint());
});

gulp.task('sass:build', function() {
  gulp.src('./src/sass/**/style.scss')
    .pipe(rename({suffix: '.min'}))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass:optimized', function() {
  return gulp.src('./src/sass/**/style.scss')
    .pipe(rename({suffix: '.min'}))
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer())
    .pipe(cssnano({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('sass', ['sass:lint', 'sass:build']);

gulp.task('js:build', function(callback) {
  const webpackConfig = require('./webpack.config');
  webpack(Object.create(webpackConfig), function(err, stats) {
    callback();
  });
});

gulp.task('js:optimized', function(callback) {
  const webpackConfig = require('./webpack.production.config');
  webpack(Object.create(webpackConfig), function(err, stats) {
    callback();
  });
});

gulp.task('js', ['js:build']);

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(plumber())
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('images:optimized', function() {
  return gulp.src('src/img/**/*')
    .pipe(plumber())
    .pipe(imagemin({
      progressive: true,
      multipass: true,
    }))
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('fonts', function() {
  return gulp.src('src/font/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/font'));
});

gulp.task('templates', function() {
  var templateData = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
  var options = {
    ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
    helpers: {
      capitals: function(str) {
        return str.toUpperCase();
      },
    },
  };

  return gulp.src('./index.html')
    .pipe(plumber())
    .pipe(handlebars(templateData, options))
    .pipe(gulp.dest('dist'));
});

gulp.task('templates:optimized', ['templates'], function() {
  return gulp.src('./dist/**/*.html')
    .pipe(inlinesource())
    .pipe(replace(/\.\.\//g, ''))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function(cb) {
  return rimraf('./dist/', cb);
});

gulp.task('watch', function() {
  const reload = browserSync.reload;
  gulp.watch(['./src/templates/**/*.hbs', './src/partials/**/*.hbs'], ['templates'], reload);
  gulp.watch('./src/sass/**/*.scss', ['sass'], reload);
  gulp.watch('./src/img/**/*', ['images'], reload);
  gulp.watch(['./src/js/**/*.js', 'Gulpfile.js'], ['js'], reload);
});

gulp.task('build', function (cb) {
  return runSequence('clean', ['sass', 'images', 'fonts', 'js', 'templates'], cb);
});

gulp.task('build:optimized', function(cb) {
  return runSequence('clean',
    ['sass:optimized', 'images:optimized', 'fonts', 'js:optimized', 'templates:optimized'],
    cb);
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['build'], function() {

  // Serve files from the root of this project
  browserSync.init(['./dist/**/*'], {
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false,
    },
    server: {
      baseDir: './dist',
    },
  });

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.start(['watch']);
});
