import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
	// 修改任何state实例都需要mutations操作
	state:{
		cartList: []
	},
	getters:{

	},
	mutations:{
		addCart(state, payload) {
			let oldProduct = null
			for(let item of state.cartList) {
				if(item.iid === payload.iid) {
					oldProduct = item
				}
			}
			if (oldProduct) {
				oldProduct.count += 1
			} else {
				payload.count += 1
			}
		}
	},
	actions:{
		
	}
})
// 挂载到vue实例上
export default store