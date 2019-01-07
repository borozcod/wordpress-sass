var gulp = require('gulp');
var sass = require('gulp-sass');

const wp_theme_dir = './wp-content/themes/THEME_NAME';
const wp_style_dir = wp_theme_dir + '/sass/**/*.scss';

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src(wp_style_dir)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(wp_theme_dir));
});

gulp.task('sass:watch', function () {
  gulp.watch(wp_style_dir, gulp.series('sass'));
});
