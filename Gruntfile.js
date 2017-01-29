// Обязательная обёртка
module.exports = function(grunt) {

  // Задачи
  grunt.initConfig({
    // Склеиваем
    concat: {
      main: {
        src: [
          'js/carousel.js',
          'js/modal_window.js'  // Все JS-файлы в папке
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
    watch: {
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
    tasks: ['sass'],
      options: {
          spawn: false,
      }
    }
        
    },
    sass: {
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                'css/build/style.css': 'css/style.scss'
            }
        }
    },
    susy: {
      dist: {
        options: {
          style: 'expanded',
          require: 'susy'
        },
        files: {
            'css/build/style.css': 'css/style.scss'
        }
      }
    },
    compass: {
      options: {
        require: 'susy',
      }
    }
  });

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass')
 

  // Задача по умолчанию
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch','sass', 'compass', 'susy']);
};