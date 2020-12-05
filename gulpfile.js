const { src, dest, parallel, watch} = require('gulp');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync');

function sass(){
    return src('./styles/sass/style.scss')
    .pipe(gulpSass())
    .pipe(dest('./styles/css/'))
    .pipe(browserSync.stream());

}
function browser(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })
    watch('*.html').on('change',browserSync.reload);
}

function watchers(done){
    watch('./styles/sass/', sass)
    browserSync.reload();
    done();

}
    
module.exports= {
    sass,
    watchers,
    browser: parallel(browser,watchers)
}
