var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src(['./scss/*.scss','./scss/**/*.css'])
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('copy-font', function() {
    return gulp.src('scss/iconfont/*.*')
        .pipe(gulp.dest('css/iconfont'));
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

