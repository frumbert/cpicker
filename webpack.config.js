const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const env = process.env.WEBPACK_ENV

// Simply configure those 4 variables:
const JS_SOURCE_FILES = ['./src/index.js'] // 'babel-polyfill', adds 420k
const OUTPUT_FILENAME = 'cpicker'
const DEST_FOLDER = 'dist'
const COPYRIGHT = `MIT Licence`

const OUTPUT_FILE = `${OUTPUT_FILENAME}.js`
const OUTPUT_FILE_MIN = `${OUTPUT_FILENAME}.min.js`

const { plugins, outputfile, mode } = env == 'build' 
	? { 
		plugins: [
			new UglifyJSPlugin(), 
			new webpack.BannerPlugin(COPYRIGHT)
		], 
		outputfile: OUTPUT_FILE_MIN,
		mode: 'production'
	} 
	: { 
		plugins: [
			new webpack.BannerPlugin(COPYRIGHT)
		], 
		outputfile: OUTPUT_FILE,
		mode: 'development'
	} 

module.exports = {
	mode,
	entry: JS_SOURCE_FILES,
	output: {
		path: path.join(__dirname, DEST_FOLDER),
		filename: outputfile,
        publicPath: '/',
		libraryTarget: 'umd',
		umdNamedDefine: true,
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false,
        }
	},
	module: {
		rules: [{
			// Only run `.js` files through Babel
			test: /\.m?js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'] //, {
//	                    targets: {
//	                        browsers: ['> 1%']
//	                    }
//	                }]
				}
			}
		}]
	},
	devtool: 'source-map',
	plugins: plugins
}