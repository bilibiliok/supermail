<template>
	<div id="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper :top-images="topImages"></detail-swiper>
		<detail-base-info :goods="goods"></detail-base-info>
		<detail-shop-info :shop="shop"></detail-shop-info>
	</div>
</template>
<script>
import DetailNavBar from './childComponents/DetailNavBar'

import DetailSwiper from './childComponents/DetailSwiper'

import DetailBaseInfo from './childComponents/DetailBaseInfo'

import DetailShopInfo from './childComponents/DetailShopInfo';

import {getDetail,Goods, Shop} from 'network/detail'
export default {
	name: 'Detail',
	data() {
		return {
			iid:null,
			topImages:[],
			goods: {},
			shop: {}
		}
	},
	components:{
		DetailNavBar,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo
	},
	created() {
		this.iid = this.$route.query.iid
		if(this.iid) {
			getDetail(this.iid).then(res =>{
				console.log(res)
				const data = res.result
				// 1.获取顶部的轮播数据
				this.topImages = data.itemInfo.topImages
				// 2.获取商品信息
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
				// 3.获取用户商铺信息
				this.shop = new Shop(data.shopInfo)
			})
		}
	},
	
}
</script>
<style scoped>
	
</style>