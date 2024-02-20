'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const scsslint = require('gulp-scss-lint');
//const sourcemaps = require('gulp-sourcemaps');

/**
 * Paths and files
 */
const srcScss = 'scss/**/*.scss';
const srcScssDir = 'scss';
const srcScssFiles = [
    `${srcScssDir}/styles.scss`,
];
const srcJsDir = 'js';
const srcJsFiles = [
    `${srcJsDir}/scripts.js`,
];
const srcImgFiles = 'images/**/*.{gif,jpg,png,svg}';
const destCss = '../dist/css';
const destJs = '../dist/js';
const destImg = '../dist/images';


/**
 * Task for styles.
 *
 * Scss files are compiled and sent over to `assets/css/`.
 */
gulp.task('css', () => {
    return gulp.src(srcScssFiles)
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade : false }))
        .pipe(rename('styles.min.css'))
        .pipe(cleancss())
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destCss));
});

/**
 * Task for scripts.
 *
 * Js files are uglified and sent over to `assets/js/scripts/`.
 */
gulp.task('js', () => {
    return gulp.src(srcJsFiles)
        //.pipe(sourcemaps.init())
        .pipe(babel({
            presets : ['@babel/env']
        }))
        .pipe(concat(`scripts.min.js`))
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(destJs));
});

/**
 * Task for copy images.
 */
gulp.task('images', () => {
    return gulp.src(srcImgFiles)
        .pipe(gulp.dest(destImg));
});

/**
 * Task for watching styles, images and scripts.
 */
gulp.task('watch', () => {
    gulp.watch(srcScss, gulp.series('css'));
    gulp.watch(srcJsFiles, gulp.series('js'));
    gulp.watch(srcImgFiles, gulp.series('images'));
});

/**
 * Default task
 */
gulp.task('default', gulp.series('css', 'js', 'images') );
