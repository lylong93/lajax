export default function(opts) {
	let {method,url,data} = opts

	return new Promise ((resolve,reject)=> {
		let xhr =new XMLHttpRequest()

		xhr.open('post',url,true)

		xhr.setRequestHeader("Content-Type","application/json; charset=utf-8"); 

		let res = {ck:1,one:1}
		let oo = {ok:1}
		console.log(typeof(oo))
		let no = JSON.stringify(oo)
		console.log(typeof(no))
		xhr.send(JSON.stringify(res))

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