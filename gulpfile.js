var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('style/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('style/css'))
});

gulp.task('watch', function(){
  gulp.watch('style/sass/**/*.scss', ['sass']); 
  // Other watchers
})