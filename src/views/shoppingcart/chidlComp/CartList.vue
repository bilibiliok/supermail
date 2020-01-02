<template>
	<div class="cart-list">
		<scroll ref="scroll" class="content">
			<!-- <li v-for="item in cartList" :key="item.iid">{{item}}</li> -->
			<cart-list-item v-for="(item,index) in cartList" :key="item.iid" :item-info="item"></cart-list-item>
		</scroll>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

import CartListItem from './CartListItem'

import Scroll from 'components/common/scroll/Scroll'
export default {
	data() {
		return {

		}
	},
	components:{
		Scroll,
		CartListItem
	},
	computed: {
		...mapGetters(['cartList'])
	},
	activated() {
		this.$refs.scroll.refresh()
	},
}
</script>
<style scoped>
	.cart-list{
		height: calc(100% - 44px - 44px - 49px)
	}
	.content{
		overflow: hidden;
		height: calc(100%);
	}
</style>