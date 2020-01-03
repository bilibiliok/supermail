<template>
	<div class="wrapper" ref="aaaa">
		
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
	// 组件创建完之后调用
	created() {
		// document.querySelector('.wrapper')
		
	},
	mounted() {
		// console.log(this.$refs.aaaa);
		// console.log(document.querySelector('.wrapper'));
		this.scroll = new BScroll(this.$refs.aaaa,{
			probeType:3,
			pullUpLoad:true
		})
		this.scroll.on('scroll',(position)=>{
			// console.log(position);
		})
		this.scroll.on('pullingUp',()=>{
			// console.log('上拉加载更多');
		})
	},
	methods: {
		aaaaa() {
			// console.log('1111')
		}
	},
}
</script>
<style  scoped>
	.wrapper{
		height: 150px;
		background-color: red;
		/* overflow: hidden; */
		/* 设置在固定位置滚动 */
		/* overflow-y: scroll */
	}
</style>