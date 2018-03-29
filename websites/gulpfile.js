let gulp = require('gulp')
let sass = require('gulp-sass')
let browserSync = require('browser-sync').create() 

gulp.task('sass', () => {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream())
})

gulp.task('sync', () => {
  browserSync.init({
    server: './'
  })
  gulp.watch('./src/sass/main.scss', ['sass'])
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./src/pages/*.html').on('change', browserSync.reload)
  gulp.watch('./src/js/*.js').on('change', browserSync.reload) 
})

gulp.task('default', ['sync'])