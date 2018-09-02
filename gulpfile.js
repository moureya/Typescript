var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('modules/module_11/tsconfig.json');

gulp.task('typescript', function() {
  gulp.src('modules/module_11/*.ts');
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest('modules/module_11'));
});

gulp.task('watch', function() {
  gulp.watch('modules/module_11/*.ts', ['typescript']);
});

gulp.task('default', ['watch']);
