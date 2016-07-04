 
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var sprite = require("css-sprite");
 
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

gul