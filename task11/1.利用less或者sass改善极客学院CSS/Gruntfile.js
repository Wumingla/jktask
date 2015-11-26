'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  var config = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({

    config: config,

    watch: {
      babel: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['babel']
      },

      gruntfile: {
        files: ['Gruntfile.js']
      },

      styles: {
        files: ['<%= config.app %>/styles/{,*/}*.scss'],
        tasks: ['sass', 'postcss']
      }
    },

    // 服务器设置
    browserSync: {
      options: {
        notify: false,
        background: true,
        watchOptions: {
          ignored: ''
        }
      }, 
      livereload: {
        options: {
          files: [
            '<%= config.app %>/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= config.app %>/images/{,*/}*',
            '.tmp/scripts/{,*/}*.js'
          ],
          port: 9000,
          server: {
            baseDir: ['.tmp', config.app],
            routes: {
              '/bower_components': './bower_components'
            }
          }
        }
      }
    },

    //sass转为css
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                '.tmp/styles/index.css': '<%= config.app %>/styles/index.scss'
            }
        }
    },

    //清除
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    },

    //编译CSS文件
    postcss: {
      options: {
        map: true,
        processors: [
          // Add vendor prefixed styles
          require('autoprefixer')({
            browsers: ['> 1%', 'last 4 versions', 'Firefox ESR']
          })
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // 压缩css文件
    cssmin: {
      dist: {
        files: {
          '<%= config.dist %>/styles/main.min.css': [
            '.tmp/styles/{,*/}*.css',
          ]
        }
      }
    },

    // // 合并js文件
    concat: {
      options:{
        separator:';'
      },
      dist: {
        src:['<%= config.app %>/scripts/{,*/}*.js'],
        dest:'<%= config.dist %>/scripts/all.js'
      }
    },


    // 压缩js 文件
    uglify: {
      // options:{
      //   sourceMap:true
      // },
      dist: {
        files: {
          '<%= config.dist %>/scripts/all.min.js': [
            '<%= config.app %>/scripts/{,*/}*.js'
          ]
        }
      }
    },


    //编译js文件
    babel: {
      options: {
        sourceMap: true
      },
      // 把js文件编译到.tmp/scripts文件中
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/scripts',
          src: '{,*/}*.js',
          dest: '.tmp/scripts',
        }]
      }
    }

  });


  
  // 组合任务 server
  grunt.registerTask('serve', 'start the server and preview your app', [
      'clean',
      'babel',
      'sass',
      'postcss',
      'browserSync',
      'watch'
  ]);

  // server 历史遗留的问题
  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('default', [
    'clean',
    'sass',
    'postcss',
    'cssmin',
    'uglify',
    'concat'
  ]);

};