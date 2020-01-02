<template>
	<div class="cart">
		<!-- 导航 -->
		<nar-bar class="cart-nav">
			<div slot="center">购物车({{length}})</div>
		</nar-bar>
		<!-- 商品列表 -->
		<cart-list></cart-list>

		<!-- 底部汇总 -->
		<cart-bottom-bar></cart-bottom-bar>
	</div>
</template>
<script>
import NarBar from 'components/common/navbar/NavBar'

import CartList from './chidlComp/CartList'

import CartBottomBar from './chidlComp/CartBottomBar';

import {mapGetters} from 'vuex'

export default {
	data() {
		return {

		}
	},
	components:{
		NarBar,
		CartList,
		CartBottomBar
	},
	computed: {
		// cartLength() {
		// 	return this.$store.getters.cartLength
		// }
		// 两种语法
		// ...mapGetters(['cartLength', 'cartList'])
		...mapGetters({
			length: 'cartLength',
			cartList: 'cartList'
		})
	},
}
</script>
<style  scoped>
	.cart{
		height: 100vh;
	}
	.cart-nav{
		background-color: var(--color-tint);
		color: #fff;
		/* 浏览器原生滚动时，为了不让导航栏一起滚动，可以使用定位 */
		/* position: sticky; */
		/* width: 100%; */
		/* top: 0;
		z-index: 2 */
	}
</style>