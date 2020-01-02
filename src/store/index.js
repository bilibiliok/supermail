import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

import actions from './actions'
import getters from './getters'

// 1.安装插件
Vue.use(Vuex)

// 创建store对象
const state = {
	cartList: []
}

const store = new Vuex.Store({
	// 修改任何state实例都需要mutations操作
	// mutations唯一的目的就是修改state的状态
	// mutations中的方法完成的事情尽可能的比较单一 
	state,
	getters,
	mutations,
		
		// addCart(state, payload) {
		// 	// payLoad 新增的商品、
		// 	// let oldProduct = null
		// 	// for(let item of state.cartList) {
		// 	// 	if(item.iid === payload.iid) {
		// 	// 		oldProduct = item
		// 	// 	}
		// 	// }
		// 	// if (oldProduct) {
		// 	// 	oldProduct.count += 1
		// 	// } else {
		// 	// 	payload.count = 1
		// 	// 	state.cartList.push(payload)
		// 	// }
		// 	// 1.查找数组中是否存在该商品
		// 	let oldProduct = state.cartList.find(item=>item.iid === payload.iid)
		// 	if (oldProduct) {
		// 		oldProduct.count += 1
		// 	}else {
		// 		payload.count = 1
		// 		state.cartList.push(payload)
		// 	}
		// 	// 第二种方法
		// 	// let index = state.cartList.indexOf(payload)
		// 	// if (index !== -1) {
		// 	// 	let oldProduct = state.cartList[index]
		// 	// 	oldProduct.count += 1
		// 	// } else {
		// 	// 	payload.count = 1
		// 	// 	state.cartList.push(payload)
		// 	// }
		// }
		actions,
	// actions:{
	// 	addCart(context, payload) {
	// 		// state 上下文
	// 		// payLoad 新增的商品、
	// 		// let oldProduct = null
	// 		// for(let item of state.cartList) {
	// 		// 	if(item.iid === payload.iid) {
	// 		// 		oldProduct = item
	// 		// 	}
	// 		// }
	// 		// if (oldProduct) {
	// 		// 	oldProduct.count += 1
	// 		// } else {
	// 		// 	payload.count = 1
	// 		// 	state.cartList.push(payload)
	// 		// }
	// 		// 1.查找数组中是否存在该商品
	// 		let oldProduct = context.state.cartList.find(item=>item.iid === payload.iid)
	// 		if (oldProduct) {
	// 			// oldProduct.count += 1
	// 			context.commit('addCount', oldProduct)
	// 		}else {
	// 			payload.count = 1
	// 			// context.state.cartList.push(payload)
	// 			context.commit('addToCart', payload)
	// 		}
	// 		// 第二种方法
	// 		// let index = state.cartList.indexOf(payload)
	// 		// if (index !== -1) {
	// 		// 	let oldProduct = state.cartList[index]
	// 		// 	oldProduct.count += 1
	// 		// } else {
	// 		// 	payload.count = 1
	// 		// 	state.cartList.push(payload)
	// 		// }
	// 	}
	// }
})
// 挂载到vue实例上
export default store