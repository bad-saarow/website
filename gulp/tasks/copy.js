var gulp = require('gulp');
var config = require('../config');

gulp.task('copy', function() {
  // copy all html pages
  gulp.src(config.pages.src)
  .pipe(gulp.dest(config.pages.dest));

  // copy all assets
  gulp.src(config.assets.src)
  .pipe(gulp.dest(config.assets.dest));

  // copy files located in src (not a subfolder of src)
  gulp.src(config.src+'/*.*')
  .pipe(gulp.dest(config.dest));
});
