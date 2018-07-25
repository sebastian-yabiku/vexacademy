/**
 * Task Module for manage sass
 * @module Task
 * @author sebastian yabiku
 * @returns {function}
 */
function Task(gulp, plugins, pathFiles) {

	/**
	 * Config object.
	 * @type {object}
	 */
	var config = {
		frontend: {
			pathStyle: pathFiles.frontend.styles
		},
		public: {
			pathStyle: pathFiles.public.base
		}
	};

	/**
	 * Tasks of functions.
	 * @constructor taskRun
	 */
	var taskRun = function () {

		var mixing = {

			build: function () {
				return gulp.src(config.frontend.pathStyle + '/mixings-main.scss')
					.pipe(plugins.sass())
					.pipe(gulp.dest(config.public.pathStyle));
			},
			min: function(){
				return gulp.src(config.frontend.pathStyle + '/mixings-main.scss')
					.pipe(plugins.sass({
						outputStyle: 'compressed'
					}))
					.pipe(plugins.rename('mixings-main.min.css'))
					.pipe(gulp.dest(config.public.pathStyle))
			}
		}

		gulp.task('sass:build', mixing.build);
		gulp.task('sass:min', mixing.min);

		gulp.task("sass", function (cb) {
			plugins.runSequence("sass:build", "sass:min", cb)
		});
	};

	return {
		run: taskRun
	}

}

module.exports = Task;

