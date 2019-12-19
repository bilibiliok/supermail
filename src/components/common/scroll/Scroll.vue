<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
	data() {
		return {
			scroll: null
		}
	},
	props:{
		probeType:{
			type: Number,
			default: 0
		}
	},
	mounted() {
		// 创建better-scroll对象
		this.scroll = new BScroll(this.$refs.wrapper,{
			// probeType: 3,
			click:true,
			pullUpLoad:true,
			probeType: this.probeType
		})
		// 监听滚动位置
		this.scroll.on('scroll',(position)=>{
			// console.log(position);
			this.$emit('scroll',position)
		})
		// 上拉加载更多
		this.scroll.on('pullingUp', ()=>{
			this.$emit('pullingUp')
		})
	},
	methods: {
		scrollTo(x, y, time=300){
			this.scroll && this.scroll.scrollTo(x, y, time)
			// this.scroll 判断是否已经形成对象
		},
		finishPullUp() {
			this.scroll && this.scroll.finishPullUp()
		},
		refresh() {
			this.scroll && this.scroll.refresh()
			console.log('打印几次');
		} 
	},

}
</script>
<style scoped>
	
</style>