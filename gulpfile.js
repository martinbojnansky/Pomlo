var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function() {
    gulp.src('./src/styles/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});
 
gulp.task('watch', ['sass'], function() {
    gulp.watch('./src/styles/**/*.scss', ['sass']);
    gulp.watch('./src/styles/*.scss', ['sass']);
});