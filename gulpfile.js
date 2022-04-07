//Copilar sass
//paso 1 identificar archivo
//paso 2 copilarla
//3 guardar el .css

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

function css(done) {
    src('src/scss/app.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
                .pipe(postcss([autoprefixer(), cssnano()]))
                    .pipe(sourcemaps.write('.'))
                        .pipe(dest('build/css'))
    done();
}

function dev(){
    watch('src/scss/**/*.scss', css);
}

exports.css = css;
exports.dev = dev;
exports.default = series(css, dev);

// {outputStyle: 'compressed'}