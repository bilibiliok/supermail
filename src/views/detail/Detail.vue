<template>
	<div id="detail">
		<detail-nav-bar ref="nav" @titleClick="titleClick" class="detail-nav"></detail-nav-bar>
		<scroll class="content" :probe-type="3" ref="scroll" @scroll="contentScroll">
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info  :shop="shop"></detail-shop-info>
			<detail-goods-info @imageLoad="imageLoad" class="good-info" :detail-info="detailInfo"></detail-goods-info>
			<detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
			<detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
			<good-list ref="recommend" :goods="recommends"></good-list>
		</scroll>
		<detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
		<back-top v-show="isshowBackTop" @click.native="backClick"></back-top>
	</div>
</template>
<script>
import DetailNavBar from './childComponents/DetailNavBar'

import DetailSwiper from './childComponents/DetailSwiper'

import DetailBaseInfo from './childComponents/DetailBaseInfo'

import DetailShopInfo from './childComponents/DetailShopInfo'

import DetailGoodsInfo from './childComponents/DetailGoodsInfo'

import DetailParamInfo from './childComponents/DetailParamInfo';
import DetailCommentInfo from './childComponents/DetailCommentInfo'

import DetailBottomBar from './childComponents/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'

import GoodList from 'components/content/goods/GoodsList'
// 导入防抖函数
import { debounce } from "../../common/utils";
// 混入模式 
import { itemListenerMixin, backTopMixin } from '../../common/mixin'

import {getDetail, Goods, Shop, GoodsParam,getRecommend} from 'network/detail'
export default {
	name: 'Detail',
	data() {
		return {
			iid:null,
			topImages:[],
			goods: {},
			shop: {},
			detailInfo:{},
			paramInfo:{},
			commentInfo:{},
			recommends: [],
			themeTopYs: [],
			getThemeTopy: null,
			currentIndex: 0
		}
	},
	mixins: [itemListenerMixin,backTopMixin],
	components:{
		DetailNavBar,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo,
		DetailGoodsInfo,
		DetailParamInfo,
		DetailCommentInfo,
		Scroll,
		GoodList,
		DetailBottomBar
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

				// 4.获取商品的详情信息
				this.detailInfo = data.detailInfo
				// 5.获取商品的参数信息
				this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
				//6. 取出用户评论信息
				if(data.rate.cRate !==0) {
					this.commentInfo = data.rate.list[0]
				}
				// 1.值不对，dom根本就没有渲染
				// this.themeTopYs = []
				// this.themeTopYs.push(0)
				// this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				// this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
				// this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
				// console.log(this.themeTopYs);
				// this.$nextTick(()=>{
				// 	// 根据最新的数据，对应的dom已经显示出来了
				// 	// 图片依然没有能加载完，（目前获取到offsetTop不包含其中的图片）
				// 	this.themeTopYs = []
				// 	this.themeTopYs.push(0)
				// 	this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				// 	this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
				// 	this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
				// 	console.log(this.themeTopYs);
				// })
				
			})
		}
		// 请求推荐数据
		getRecommend().then(res =>{
			console.log('res',res)
			this.recommends = res.data.list
		})

		// 给getThemeTopy赋值(对getThemeTopy赋值的操作进行防抖)
		this.getThemeTopy = debounce(()=>{
			this.themeTopYs = []
			this.themeTopYs.push(0)
			this.themeTopYs.push(this.$refs.params.$el.offsetTop)
			this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
			this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)

			// 插入一个js里能表示的最大值
			this.themeTopYs.push(Number.MAX_VALUE)
			console.log(this.themeTopYs);
		},100)
	},
	methods: {
		imageLoad() {
			this.$refs.scroll.refresh()
			this.getThemeTopy()
			// this.themeTopYs = []
			// this.themeTopYs.push(0)
			// this.themeTopYs.push(this.$refs.params.$el.offsetTop)
			// this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
			// this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
			// console.log(this.themeTopYs);
		},
		// 监听首页的变化
		titleClick(index) {
			console.log(this.themeTopYs[index]);
			this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
		},
		// 监听滚动事件
		contentScroll(position) {
			// console.log(position);
			// 获取y值
			const positiony = -position.y
			// positiony与主题中的值进行对比
			// 在0到1之间 index = 0；
			// 在1到2之前 index = 1；
			// 在2到3之间 index = 2；
			// 大于3时 index = 3
			// 在3到+无穷之间 index =3
			// console.log(Number.MAX_VALUE);
			let length = this.themeTopYs.length
			
			// for(let i = 0; i<length; i++) {
			for(let i = 0; i<length - 1; i++) {
				// if(positiony > this.themeTopYs[i] && positiony < this.themeTopYs[i+1]){
				// 	console.log(i);// string 类型
				// }
				// 第二种写法，设置一个最大值
				if(this.currentIndex !== i && (positiony >= this.themeTopYs[i] && positiony < this.themeTopYs[i+1])) {
					this.currentIndex = i
					console.log(this.currentIndex);
					this.$refs.nav.currentIndex = this.currentIndex
				}
				// if(this.currentIndex !== i && (i< length-1 && positiony >= this.themeTopYs[i] && positiony < this.themeTopYs[i+1])||(i === length - 1 && positiony >= this.themeTopYs[i])) {
					// this.currentIndex = i
					// console.log(this.currentIndex);
					// this.$refs.nav.currentIndex = this.currentIndex
				// }
			}
			// 返回顶部按钮显示
			this.isshowBackTop = position.y < -1000
		},
		// 添加到购物车
		addToCart() {
			// 1.获取购物车需要展示的信息
			const product = {}
			product.image = this.topImages
			product.title = this.goods.title
			product.desc = this.goods.desc
			product.price = this.goods.nowPrice
			product.iid = this.iid


			// 2.将商品添加到购物车界面
			this.$store.commit('addCart',product)
		}
	},
	mounted() {
		
	},
	destroyed() {
		this.$bus.$off('itemImageLoad',this.itemImgListener)
	}
	
}
</script>
<style scoped>
	#detail{
		height: 100vh;
		position: relative;
		z-index: 10;
		background-color: #fff;
	}
	.content{
		/* height: calc(100% - 44px) */
		position: absolute;
		top: 44px;
		bottom: 60px;
	}
	.detail-nav{
		position: relative;
		z-index: 9;
		background: #fff
	}
	.good-info{
		padding: 20px 0;
		border-bottom: 5px solid #f2f5f8
	}
</style>
