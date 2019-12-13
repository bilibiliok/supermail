<template>
	<div id="home">
		<nar-bar class="home-nav">
			<div slot="center">购物街</div>
		</nar-bar>
		<home-swiper :banners="banners"></home-swiper>
		<RecommendView :recommends="recommends"/>
		<FeatureView/>
	</div>
</template>
<script>
import NarBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComp/HomeSwiper'
import RecommendView from './childComp/RecommendView'
import FeatureView from './childComp/FeatureView'

import {getHomeMultidata} from '../../network/home'

export default {
	components:{
		NarBar,
		HomeSwiper,
		RecommendView,
		FeatureView
	},
	data() {
		return {
			// result: null,
			banners: [],
			recommends: []
		}
	},
	created() {
		getHomeMultidata().then((res) =>{
			console.log(res);
			this.banners = res.data.banner.list
			this.recommends = res.data.recommend.list
		})
	},
	methods: {
		
	},
// 	函数调用 ->压入函数栈（保存函数调用所有变量）
//  函数调用结束->释放函数栈（释放函数所有变量）
}
</script>
<style scoped>
	.home-nav{
		background-color: var(--color-tint);
		color: #fff
	}
</style>
 