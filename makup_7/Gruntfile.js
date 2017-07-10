module.exports = function(grunt) {

    // tasks
    grunt.initConfig({
      
        
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/image',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/image'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/stylesheet.min.css': 'src/css/stylesheet.scss'
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
                    'build/index.min.html': 'src/index.html', // 'destination': 'source'
                }
            }
        },



        watch: {
            autoprefixer: {
                files: ['build/stylesheet.min.css'],
                tasks: ['autoprefixer'],
                options: {
                    spawn: false,
                }
            },
            image: {
                files: ['**/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['src/css/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                }
            },

            htmlmin: {
                files: ['src/index.html'],
                tasks: ['htmlmin'],
                options: {
                    spawn: false,
                },
            }


        },
        autoprefixer: {
            options: {
                browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
            },
            dist: {
                files: {
                    'build/stylesheet.min.css': 'build/stylesheet.min.css'
                }
            }
        }

    });


    
   
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-autoprefixer');


    grunt.registerTask('default', ['imagemin', 'watch', 'sass', 'compass', 'htmlmin', 'autoprefixer']);
};