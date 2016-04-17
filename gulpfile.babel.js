'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')
const webpack = require('gulp-webpack')
const nodemon = require('gulp-nodemon')
const webpackConfig = require('./webpack.config')

const paths = {
  server: 'src/server/**/*.js',
  client: 'src/client/**/*.js'
}

gulp.task('start-server', () =>
  nodemon({
    script: 'dist/index.js',
    watch: ['dist/**/*.js'],
    env: { 'NODE_ENV': 'development' }
  })
)

gulp.task('server-bundle', () =>
  gulp.src(paths.server)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
)

gulp.task('client-bundle', () =>
  gulp.src('src/client/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('static'))
)

gulp.task('watch', () => {
  gulp.watch(paths.server, ['server-bundle'])
  gulp.watch(paths.client, ['client-bundle'])
})

gulp.task('default', ['watch', 'server-bundle', 'client-bundle', 'start-server'], () => {})
