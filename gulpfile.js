"use strict";

const gulp = require("gulp");
const mjml = require("gulp-mjml");
const image = require("gulp-image");

gulp.task("image", async () => {
  gulp.src("./images/fixture/*").pipe(image()).pipe(gulp.dest("./images/"));
});

gulp.task("mjml", async () => {
  gulp.src("./mjml/**/*.mjml").pipe(mjml()).pipe(gulp.dest("./html/"));
});

gulp.task("watch", () => {
  gulp.watch("./mjml/**/*.mjml", gulp.series("mjml"));
  gulp.watch("./images/fixture*", gulp.series("image"));
});

gulp.task("default", gulp.series("watch"));
