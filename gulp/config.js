var dest = './public';
var src = './src';

module.exports = {
    navigation: src + '/pages/navigation.coffee',
    assets: {
        src: src + '/assets/**/*',
        dest: dest + '/assets'
    },
    pages: {
        src: src + '/pages/**.html',
        dest: dest
    },
    sass: {
        src: src + '/scss/**/*.scss',
        dest: dest + '/css'
    },
    js: {
        src: src + '/js/**.js',
        dest: dest + '/js'
    },
    dest: dest,
    src: src,
    server: {
        port: 9776
    }
};