import { ADD_COUNTER, ADD_TO_CART} from './mutations_type'

export default {
	addCart(context, payload) {
		return new Promise((resolve,reject) =>{
			// state 上下文
			// payLoad 新增的商品、
			// let oldProduct = null
			// for(let item of state.cartList) {
			// 	if(item.iid === payload.iid) {
			// 		oldProduct = item
			// 	}
			// }
			// if (oldProduct) {
			// 	oldProduct.count += 1
			// } else {
			// 	payload.count = 1
			// 	state.cartList.push(payload)
			// }
			// 1.查找数组中是否存在该商品
			let oldProduct = context.state.cartList.find(item=>item.iid === payload.iid)
			if (oldProduct) {
				// oldProduct.count += 1
				context.commit(ADD_COUNTER, oldProduct)
				resolve('当前数量加一')
			}else {
				payload.count = 1
				// context.state.cartList.push(payload)
				context.commit( ADD_TO_CART, payload)
				resolve('添加新商品')
			}
			// 第二种方法
			// let index = state.cartList.indexOf(payload)
			// if (index !== -1) {
			// 	let oldProduct = state.cartList[index]
			// 	oldProduct.count += 1
			// } else {
			// 	payload.count = 1
			// 	state.cartList.push(payload)
			// }
		})
	}
}