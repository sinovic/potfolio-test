var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars      = require('postcss-simple-vars'),
    nested       = require('postcss-nested'),
    cssImport    = require('postcss-import'),
    mixins       = require('postcss-mixins'),
    hexrgba      = require('postcss-hexrgba')
;

gulp.task('style', function () {
    console.log('Imagine Sass or PostCSS running here.');

    // We use return because gulp.src() is an async function
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, mixins, autoprefixer, cssvars, hexrgba, nested]))
        // Error Handling
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
