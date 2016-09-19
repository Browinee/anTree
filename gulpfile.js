var gulp       = require('gulp');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rev        = require('gulp-rev');
var useref     = require('gulp-useref');
var revreplace = require('gulp-rev-replace');
var addsrc     = require('gulp-add-src');
var sysBuilder = require('systemjs-builder');
var gulpif     = require('gulp-if');

var htmlreplace = require('gulp-html-replace');
gulp.task('build:vendor',function(){

   return gulp.src([

      "node_modules/core-js/client/shim.min.js",
      "node_modules/zone.js/dist/zone.js",
      "node_modules/reflect-metadata/Reflect.js",
      "node_modules/systemjs/dist/system.src.js",
      "system.config.js"
   	])
   .pipe(concat('vendors.min.js'))
   .pipe(sourcemaps.init())
   .pipe(uglify())
   .pipe(gulp.dest('./dist'));

});



gulp.task('build:bundle',function(){  
  
  var builder = new sysBuilder('','./systemjs.config.js');
  return builder
         .buildStatic('./app/main.js','./dist/bundle.js',{ minify: false, sourceMaps: true,encodeNames: false })
         .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build bundle error');
            console.log(err);
        });
  
 
});

gulp.task('build',['build:bundle'],function(){
  
 gulp.src('index.html')
      .pipe(htmlreplace({

         'app':'bundle.js'
       }) )
      .pipe(useref())
      .pipe(gulpif('!*.html', rev()))
      .pipe(revreplace())
      .pipe(gulp.dest('./dist'))
      // .pipe(gulpif(../dist/vendor))

        // .pipe(htmlreplace({
        // 'vendor': 'vendors.min.js'
        // }))
        // .pipe(rev())
        // .pipe(revreplace())

});