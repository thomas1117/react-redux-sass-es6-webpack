var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('style/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('style/css'))
});

gulp.task('sass-watch', function(){
  gulp.watch('style/sass/**/*.scss', ['sass']); 
  // Other watchers
});


gulp.task('webpack', [], function() {
    // .pipe(uglify()) **add after stream to minify code**
    return gulp.src(path.ALL)
        .pipe(sourcemaps.init())
        .pipe(stream(webpackConfig))

        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('minify', [], function() {
    return gulp.src(path.ALL)
        .pipe(sourcemaps.init())
        .pipe(stream(webpackConfig))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.DEST_BUILD));
});



gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        publicPath: "/" + myConfig.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

var path = {
    HTML: 'src/index.html',
    ALL: ['src/**/*.jsx', 'src/**/*.js'],
    MINIFIED_OUT: 'bundle.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/build',
    DEST: 'dist'
};



gulp.task('watch', function() {
    gulp.watch(path.ALL, ['webpack']);
});


gulp.task('default', ['webpack-dev-server', 'watch','sass-watch']);

