module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
      my_target: {
        files: {
          'public/js/script.min.js': ['public/js/script.js']
        }
      }
    },

		jshint: {
			all: ['public/js/script.js']
		},

		watch: {
			js: {
				files: ['public/js/script.js'],
				tasks: ['jshint:all', 'uglify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
