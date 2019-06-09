const express = require('express')
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const bodyParser = require('body-parser') 

const config = require('./webpack.config.js')
const compiler = webpack(config)

const app = express()

const options = {
	writeToDisk:true,
	stats: {
      colors: true,
      chunks: false
    }
}

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(
	middleware(compiler,options)
)
app.use(express.static(__dirname))


app.use('/test',(req,res)=> {
	console.log(req.query)
	console.log(req.body)
	res.json({
		k:'okokok'
	})
})
app.listen('8000',()=>{
	console.log('sever run in 8000')
})
