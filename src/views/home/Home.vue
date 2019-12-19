<template>
	<div id="home">
		<nar-bar class="home-nav">
			<div slot="center">购物街</div>
		</nar-bar>
			<scroll @scroll="contentScroll" 
			ref="scroll" 
			class="content" 
			:probe-type="3" 
			:pull-up-load="true"
			@pullingUp="loadMore"
			>
				<home-swiper :banners="banners"
                     ref="hSwiper"></home-swiper>
				<RecommendView :recommends="recommends"/>
				<FeatureView/>
				<tab-control class="tab-control"  :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
				<good-list :goods="showGoods"></good-list>
			</scroll>
			<!-- native 监听组件的点击事件 -->
			<back-top v-show="isshowBackTop" @click.native="backClick"></back-top>
		<!-- <ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul> -->
	</div>
</template>
<script>
import HomeSwiper from './childComp/HomeSwiper'
import RecommendView from './childComp/RecommendView'
import FeatureView from './childComp/FeatureView'

import NarBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'


import {getHomeMultidata,getHomeGoods} from '../../network/home'

export default {
	components:{
		HomeSwiper,
		RecommendView,
		FeatureView,
		TabControl,
		NarBar,
		GoodList,
		Scroll,
		BackTop
	},
	data() {
		return {
			// result: null,
			banners: [],
			recommends: [],
			titles: ['流行','新款','精选'],
			goods: {
				'pop': {page: 1, list: []},
				'new': {page: 1, list: []},
				'sell': {page: 1, list: []}
			},
			currentType:'pop',
			isshowBackTop: false
		}
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list
		}
	},
	created() {
		// 请求多个数据
		this.getHomeMultidata()
		// 请求商品数据
		this.getHomeGoods('pop')
		this.getHomeGoods('new')
		this.getHomeGoods('sell')
	},
	mounted() {
		
		// 监听item图片加载完成
		const refresh = this.debounce(this.$refs.scroll.refresh,200)
		// 1.
		// 2.
		//3.

		this.$bus.$on('itemImageLoad',()=>{
			refresh()
		})
	},
	methods: {
		/*网络请求相关方法 */
		getHomeMultidata() {
			getHomeMultidata().then((res) =>{
				this.banners = res.data.banner.list
				this.recommends = res.data.recommend.list
			})
		},
		getHomeGoods(type) {
			const page = this.goods[type].page+1
			getHomeGoods(type,page).then((res) =>{
				const goodsList = res.data.list;
          		this.goods[type].list.push(...goodsList)
				this.goods[type].page +=1

				this.$refs.scroll.finishPullUp()
			})
		},
		// 事件监听相关方法
		tabClick(index) {
			switch (index) {
				case 0:
					this.currentType = 'pop'
					break
				case 1:
					this.currentType = 'new'
					break
				case 2:
					this.currentType = 'sell'
					break
				default:
					break
			}
		},
		backClick() {
			this.$refs.scroll.scrollTo(0,0)
		},
		// 显示图标
		contentScroll(position) {
			// console.log(position);
			// if(- position.y > 1000){
			// 	this.isshowBAckTop = true
			// } else {
			// 	this.isshowBAckTop = false
			// }
			this.isshowBackTop = -position.y > 1000
		},
		// 上拉加载更多
		loadMore() {
			console.log('上拉加载更多');
			this.getHomeGoods(this.currentType)
		},
		// 防抖
		debounce(func, delay) {
			let timer = null
			
			return function (...args){
				if(timer) clearTimeout(timer)
				timer = setTimeout(() => {
					func.apply(this,args)
				}, delay);
			}

		},
		// debounce(func,delay) {
		// 	let timer = null
		// 	return function (...args) {
		// 		if(timer)clearTimeout(timer)
		// 		timer = setTimeout(() => {
		// 			func.apply(this,args)
		// 		}, delay);
		// 	}
		// }	
	},
// 	函数调用 ->压入函数栈（保存函数调用所有变量）
//  函数调用结束->释放函数栈（释放函数所有变量）
}
</script>
<style scoped>
	#home{
		height: 100vh;
		/* padding-top: 44px */
		position: relative;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: #fff;
		position: sticky;
		/* width: 100%; */
		top: 0;
		z-index: 2
	}
	.tab-control{
		position: sticky;
		top: 44px;
	}
	/* .content{
		height: calc(100%-98px);
		overflow: hidden;
	} */
	.content{
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
	}
</style>
 