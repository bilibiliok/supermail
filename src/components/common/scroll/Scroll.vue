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
		},
		pullUpLoad:{
			type: Boolean,
			default: false
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
		if (this.probeType === 2||this.probeType ===3) {
			this.scroll.on('scroll',(position)=>{
				// console.log(position);
				this.$emit('scroll',position)
			})
		}
		// 监听滚动到底部
		if (this.pullUpLoad) {
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
			})
		}
		// 上拉加载更多
		// this.scroll.on('pullingUp', ()=>{
			
		// })
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
			// console.log('打印几次');
		},
		getScrollY() {
			return this.scroll ? this.scroll.y : 0 
		}
	},

}
</script>
<style scoped>
	
</style>