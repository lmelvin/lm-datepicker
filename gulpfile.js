var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("scripts",
    function () {
        return gulp.src("./src/*.js")
            .pipe(concat("lm-datepicker.js"))
            .pipe(gulp.dest("./dist/"))
            .pipe(concat("lm-datepicker.min.js"))
            .pipe(uglify())
            .pipe(gulp.dest("./dist/"));
    });

gulp.task("default", ["scripts"]);