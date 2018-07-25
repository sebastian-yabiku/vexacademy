/**
 * Config object .
 * @type {object}
 */
var Path = {
	base: {},
	frontend: {},
	public: {}
};

Path.base = __dirname + '/../..';

/**
 * Directory base folder front end
 * @type {object}
 */
Path.frontend.base    = Path.base + '/frontend';
Path.frontend.assets  = Path.frontend.base + '/assets';
Path.frontend.styles  = Path.frontend.assets + '/styles';


/**
 * Directory of static files(js, css, images, fonts)
 * @type {object}
 */
Path.public.base   = Path.base + '/dist';



module.exports = Path;
