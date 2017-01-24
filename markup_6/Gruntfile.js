// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [
                    'js/carousel.js',
                    'js/modal_window.js' // Все JS-файлы в папке
                ],
                dest: 'js/build/index.js'
            }
        },
        // Сжимаем
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'js/build/index.min.js': '<%= concat.main.dest %>'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/stylesheet.css': 'css/stylesheet.scss'
                }
            }
        },
        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'index.html': 'concat_index.html', // 'destination': 'source'
                }
            }
        },



        watch: {
            autoprefixer: {
                files: ['css/stylesheet.css', 'css/stylesheet.min.css'],
                tasks: ['autoprefixer'],
                options: {
                    spawn: false,
                }
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            image: {
                files: ['png,jpg,gif'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                }
            },

            cssmin: {
                files: ['css/stylesheet.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                }
            },
            htmlmin: {
                files: ['concat_index.html'],
                tasks: ['htmlmin'],
                options: {
                    spawn: false,
                },
            }


        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            dist: {
                files: {
                    'css/stylesheet.min.css': 'css/stylesheet.css'
                }
            }
        }

    });


    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch', 'sass', 'compass', 'htmlmin', 'cssmin', 'autoprefixer']);
};