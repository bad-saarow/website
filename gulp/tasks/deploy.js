var deploy = require('gulp-gh-pages');
var config = require('../config');

gulp.task('deploy', function () {
    return gulp.src(config.dest + '/**/*')
        .pipe(deploy(options));
});