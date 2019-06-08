const path = require('path');

module.exports = {
	mode: 'development',

  entry: './src/index.js',
  output: {
	path: path.join(__dirname, '__build__'),
    filename: 'main.js',
    // publicPath: '/__build__/'
  }
};