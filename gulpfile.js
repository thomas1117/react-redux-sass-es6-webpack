var gulp = require('gulp');
var gutil = require("gulp-util");
var sass = require('gulp-sass');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

gulp.task('sass', function(){
  return gulp.src('style/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('style/css'))
});

gulp.task('watch', function(){
  gulp.watch('style/sass/**/*.scss', ['sass']); 
  // Other watchers
});

