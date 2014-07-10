'use strict';
var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> \n' +
            ' * Updata in <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>\n' +
            ' * Copyright (c) XIAMI\n */\n',

        // clean build
        clean: {
            build: {
                src: ["build/*"]
            }
        },

        cssmin: {
            options: {
                banner: '<%= banner %>'
            },
            combine: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.css', '!**/*min.css'],
                    dest: 'build',
                    ext: '-min.css'
                }]
            }
        },

        //打包后压缩文件
        uglify: {
            options: {
                banner: '<%= banner %>',
                beautify: {
                    ascii_only: true
                }
            },
            base: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.js', '!**/*min.js'],
                    dest: 'build',
                    ext: '-min.js'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src',
                    dest: 'build',
                    src: [
                        '**/*.js',
                        '**/*.css'
                    ]
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    return grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'copy']);
};
