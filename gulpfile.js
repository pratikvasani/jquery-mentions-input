var gulp = require('gulp');
var concat = require('gulp-concat');
gulp.task('js', function(){
    return gulp.src(['./lib/*.js','./jquery.mentionsInput.source.js'])
        .pipe(concat('jquery.mentionsInput.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', [ 'js' ]);