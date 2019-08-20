var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');

gulp.task('sass', function() {
    return gulp.src('app/scss/*.+(scss|sass)')
        /*     .pipe(sass()) */
        .pipe(sass({ outputStyle: 'extended' }).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
    return gulp.src('app/*.*')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', function() {
    gulp.watch('app/scss/*.+(scss|sass)', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch('app/scripts/*.js', gulp.parallel('code'));
});

gulp.task('clean', function() {
    return gulp.src('dist', { read: false })
        .pipe(clean());
});

gulp.task('copy', function() {
    return gulp.src(['app/**', '!app/scss/**'])
        .pipe(gulp.dest('dist'))
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));