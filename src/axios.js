export default function(opts) {
	let {method,url,data,headers} = opts

	return new Promise ((resolve,reject)=> {
		let xhr =new XMLHttpRequest()

		if(method==='get') {
			url = url +'?'
			for(let name in data) {
				url=`${url}${name}=${data[name]}&`
			}
			url=url.substring(0,url.length-1)
		}
		xhr.open(method,url,true)

		xhr.setRequestHeader("Content-Type",headers["Content-Type"]); 

		if(method==='post') {
			xhr.send(JSON.stringify(data))
		} else {
			xhr.send()
		}
		
		xhr.onload = function() {
			if(xhr.readyState === 4) {

				let {response,status,statusText} = xhr

				let _headers = xhr.getAllResponseHeaders().split('\r\n')
				_headers.pop() // 去掉最后一个空

				let headers =_headers.reduce((pre,cur)=> {
					let [name,val] = cur.split(':')
					 pre[name.trim()] = val.trim()
					 return pre
				},{})
				
				let data = {
					data:response,
					status,
					statusText,
					headers,
					config:{},
				}
				resolve(data)
			}
		}
	})
}