import axios from 'axios'

export function request(config) {
	// 创建axios实例
	// return new Promise((resolve,reject)=>{
		const instance = axios.create({
			baseURL:'http://106.54.54.237:8000/api/v1',
			// baseURL: "http://123.207.32.32:8000/api/v2",
			timeout:5000
		})
		// axios拦截器
		// 请求拦截的作用
		instance.interceptors.request.use(config =>{
			// console.log(config);
			// 比如config有一些不符合服务器的要求

			// 比如每次发送网络请求，都需要在界面中显示一个图标

			// 某些某些网络请求，必须携带一些东西，比如登录(token)
			return config // 拿到config必须返回
		}, err=>{

		})
		// 响应拦截
		instance.interceptors.response.use(result =>{
			console.log(result);
			return result.data
		}), err =>{
			// console.log('111111',err);
		}
		// 发送真正的网络请求
		return instance(config) // 返回一个promise
		// .then(res=>{
		// 	resolve(res)
		// 	// console.log(res);
		// })
		// .catch(err=>{
		// 	// console.log(err);
		// 	reject(err)
		// })
	// })
}
// export function request(config) {
// 	// 创建axios实例
// 	return new Promise((resolve,reject)=>{
// 		const instance = axios.create({
// 			baseURL:'http://123.207.32.32:8000',
// 			timeout:5000
// 		})
// 		// 发送真正的网络请求
// 		instance(config)
// 		.then(res=>{
// 			resolve(res)
// 			// console.log(res);
// 		})
// 		.catch(err=>{
// 			// console.log(err);
// 			reject(err)
// 		})
// 	})
// }
// export function request(config) {
// 	// 创建axios实例
// 	const instance = axios.create({
// 		baseURL:'http://123.207.32.32:8000',
// 		timeout:5000
// 	})
// 	// 发送真正的网络请求
// 	instance(config.baseConfig)
// 	.then(res=>{
// 		// console.log(res);
// 		config.success(res)
// 	})
// 	.catch(err=>{
// 		// console.log(err);
// 		config.failure(err)
// 	})
// }
// export function request(config,success,failure) {
// 	// 创建axios实例
// 	const instance = axios.create({
// 		baseURL:'http://123.207.32.32:8000',
// 		timeout:5000
// 	})
// 	// 发送真正的网络请求
// 	instance(config)
// 	.then(res=>{
// 		// console.log(res);
// 		success(res)
// 	})
// 	.catch(err=>{
// 		// console.log(err);
// 		failure(err)
// 	})
// }