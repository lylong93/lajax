import config from './config.js'
import Axios from './Axios'


let arr = []
let fnn 
function axios (options) {
	let opts = merger(options,config)

	function befor(opts) {
		opts.method = 'get'
		return opts
	}
	
	let porm = 
	Promise.resolve(opts)
	.then((opts)=>{
		return fnn(opts)
	})
	.then(opts=> {
		return Axios(opts)
	})
	return porm
}


axios.befor = function(fn){
	fnn = fn
	arr.push(fn)
}

// let methods = ['get','post']

// methods.forEach((i)=> {
// 	// console.log(i)
// }) 


function merger(opt,config) {
	for(let name in opt) {
		config[name] = opt[name]
	}
	return config
}


// export default axios
window.axios = axios
