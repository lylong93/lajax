const express = require('express')
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')

const config = require('./webpack.config.js')
const compiler = webpack(config)

const app = express()

const options = {
	// publicPath: '/__build__/',
	 stats: {
      colors: true,
      chunks: false
    }
}

app.use(
	middleware(compiler,options)
)
app.use(express.static(__dirname))

app.listen('8000',()=>{
	console.log('sever run in 8000')
})
