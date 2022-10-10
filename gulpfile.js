const {src ,dest,parallel,series} =require("gulp");

// -----html----
const htmlMin=require("gulp-htmlmin");
function htmltask() {
  return src("src/*.html").pipe(htmlMin({collapseWhitespace:true,removeComments:true}))
  .pipe(dest("build"))  
}
// ---------------css------------
const cssmin=require("gulp-clean-css");
const concat = require("gulp-concat");
function cssMinify() {
    return src("src/Css/**/*.css").pipe(concat("style.min.css"))
    .pipe(cssmin()).pipe(dest("build/Css"))    
    }
//----------------js----------------------
const minJs=require("gulp-terser")
function jsMinify() {
    return src("src/Js/*.js").pipe(concat("script.min.js"))
    .pipe(minJs())
    .pipe(dest("build/Js"))
}
//---------imgs---------------

// const imgMin=require("gulp-imagemin");
// function imgMinify() {
// return src("src/image/*").pipe(imgMin())
// .pipe(dest("build/image"))    
// }
const sass = require('gulp-sass')(require('sass'));


function buildStyles() {
    return src('./src/source/**/*.scss')
        .pipe(sass())
        .pipe(dest('./dest/'))
}
function watchTask() {
    watch(['./src/source/**/*.scss'], { interval: 500 }, parallel(buildStyles))
}
exports.sass=series(parallel(buildStyles, watchTask));
exports.default=parallel(cssMinify,htmltask,jsMinify)