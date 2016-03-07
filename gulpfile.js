var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var watch = require('gulp-watch')
var css = require('gulp-react-native-stylesheet-css')

gulp.task('default', ['dev'])

gulp.task('dev', ["watch-css"], function(){
  nodemon({
    script: 'node_modules/react-native/local-cli/cli.js',
    args: ["start"],
    ignore: ["*"]
  })
})

gulp.task('watch-css', function(cb){
  cb()
  console.log("--------- START TASK --------")
  watch("./app/**/*.css", function(){
    gulp.src("./app/**/*.css")
      .pipe(css({ withExtendedStyleSheet: true }))
      .pipe(gulp.dest('build'))
    console.log("--------- TRANSFORM CSS TO JS --------")
  })
  console.log("--------- END TASK --------")
})
