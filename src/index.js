import config from './config.js'
import Axios from './Axios'

function axios (options) {
	let opts = merger(options,config)
	return Axios(opts)
}

axios.create = function(){
	return axios()
}

let methods = ['get','post']

methods.forEach((i)=> {
	// console.log(i)
}) 


function merger(opt,config) {
	for(let name in opt) {
		config[name] = opt[name]
	}
	return config
}


// export default axios
window.axios = axios
