const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: "development",
	entry: "./src/main.js",
	output: {
		path: `${__dirname}/build`,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader"
            },
			{
				test: /\.vue$/,
				exclude: /(node_modules)/,
				loader: "vue-loader"
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};
