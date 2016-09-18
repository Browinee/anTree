var gulp       = require('gulp');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rev        = require('gulp-rev');
var useref     = require('gulp-useref');
var revreplace = require('gulp-rev-replace');
var addsrc     = require('gulp-add-src');
gulp.task('build:vendor',function(){

   gulp.src([

      "node_modules/core-js/client/shim.min.js",
      "node_modules/zone.js/dist/zone.js",
      "node_modules/reflect-metadata/Reflect.js",
      "node_modules/systemjs/dist/system.src.js",
      "system.config.js"
   	])
   .pipe(concat('vendors.min.js'))
   .pipe(sourcemaps.init())
   .pipe(uglify())
   .pipe(rev())
   .pipe(gulp.dest('./dist'));

   // .pipe(sourcemaps.init())
   // .pipe(useref())
   // .pipe(uglify())
   // .pipe(rev())
   // .pipe(sourcemaps.write())
   // .pipe(gulp.dest('./dist'))
   // .pipe(revreplace())

   



});

gulp.task('build:app',function(){

 gulp.src('app/*.js')
     .pipe(addsrc.append('config.js'))
     .pipe(concat('app.min.js'))
     .pipe(uglify())
     .pipe(rev())
     .pipe(dest('./dist'))



});


gulp.task('build',function(){

 gulp.src('index.html')
        .pipe(htmlreplace({
        'vendor': 'vendors.min.js'
        }))
        .pipe(rev())
        .pipe(revreplace()



});
