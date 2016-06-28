 
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
 
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
/**<link rel="stylesheet" href="css/basics.css">
        <link rel="stylesheet" href="css/menu.css">
        <link rel="stylesheet" href="css/hero.css">
        <link rel="stylesheet" href="css/photo-grid.css">
        <link rel="stylesheet" href="css/modals.css">
        <link rel="stylesheet" href="css/footer.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.3/foundation.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.3/plugins/foundation.equalizer.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.3/plugins/foundation.reveal.js"></script>**/