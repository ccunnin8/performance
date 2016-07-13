 
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var imageResize = require('gulp-image-resize');
var imagemin = require("gulp-imagemin");
 
gulp.task('minify-css', function() {
    return gulp.src(['css/normalize.css','css/foundation.css','css/basics.css'
        	,'css/menu.css','css/hero.css','css/photo-grid.css','css/modals,.css','css/footer.css'])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(concat('main.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task("minify-js",function(){
	return gulp.src(['js/jquery.js','js/fastclick.js','js/foundation.js','js/foundation.equalizer.js','js/foundation.reveal.js'])
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task("resize",function(){
    gulp.src(['img/photos/header.jpg', 'img/photos/photo1.jpg','img/photos/photo2.jpg','img/photos/photo2.jpg','img/photos/photo3.jpg',
        'img/photos/photo4.jpg','img/photos/photo5.jpg','img/photos/photo6.jpg','img/photos/photo7.jpg',
        'img/photos/photo8.jpg','img/photos/photo9.jpg','img/photos/photo10.jpg'])
    .pipe(imageResize({
        width: 800,
        height: 500
    }))
    .pipe(gulp.dest('dist/img/photos'));
    gulp.src(['img/logo.png']).pipe(imageResize({
        height: 48,
        width: 640
    })).pipe(gulp.dest('dist/'));
})
gulp.task('resizeheader',function(){
    gulp.src(['img/photos/header.jpg']).pipe(imageResize({
        height: 1440,
        width: 500,
        upscale: true,
        quality: 1
    })).pipe(gulp.dest('dist/img/photos'))
});

gulp.task('imagemin',function(){
    gulp.src('img/avatars/sprite.png').pipe(imagemin()).pipe(gulp.dest('dist/avatars'));
});