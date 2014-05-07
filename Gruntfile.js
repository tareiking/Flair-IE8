module.exports = function(grunt) {
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	sass: {
		options: {
			includePaths: ['bower_components/foundation/scss']
		},
		dist: {
			options: {
				outputStyle: 'compressed'
			},
			files: {
				'css/style.css':    'sass/app.scss',
				'editor-style.css': 'sass/editor-style.scss'
			}
		}
	},
	pixrem: {
		options: {
			rootvalue: '85%',
			replace  : true
		},
		dist: {
			src : 'css/style.css',
			dest: 'css/no-rems.css'
		}
	},	

	watch: {
	  grunt: { files: ['Gruntfile.js'] },

	  sass: {
		files: 'sass/**/*.scss',
		tasks: ['sass']
	  }
	}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-pixrem');

	grunt.registerTask('build', ['sass', 'pixrem']);
	grunt.registerTask('default', ['build','watch']);
}