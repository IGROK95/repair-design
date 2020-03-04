const gulp        = require('gulp');
const browserSync = require('browser-sync');
const cssMin = require('gulp-css');
const rename = require("gulp-rename");

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('cssMinfy', function(){
  return gulp.src('src/**/*.css')
    .pipe(cssMin())
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(gulp.dest('src'));
});