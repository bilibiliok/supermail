<template>
	<div class="wrapper" ref="aaaa">
		<ul class="content">
			<li>4</li>
			<li>1</li>
			<li>3</li>
			<li>3</li>
			<li>432</li>
			<li>432</li>
			<li>324</li>
			<li>4234</li>
			<li>324</li>
			<li>eqwr</li>
			<li>re</li>
			<li>rew</li>
			<li>fds</li>
			<li>fasd</li>
			<li>fdas</li>
			<li>fasd</li>
			<li>fsdaf</li>
			<li>fadsf</li>
			<li>fadsf</li>
			<li>fasdf</li>
			<li>fd</li>
			<li>fdsa</li>
			<li>fdsa</li>
			<li>fasd</li>
			<li>fdsa</li>
			<li>afds</li>
			<li>fads</li>
			<li>fsdaf</li>
			<li>fads</li>
			<li>fdsaf</li>
			<li>fasdf</li>
			<li>dsaf</li>
			<li>rqwe</li>
			<li>gdsf</li>
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
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li>rqwe</li>
			<li>rweqr</li>
			<li>rqewr</li>
			<li>rewqr</li>
			<li>rwqer</li>
			<li>rewqr</li>
			<li>rweqr</li>
			<li>eqwr</li>
			<li>ewqe</li>
			<li>errwqdfdsaf</li>
		</ul>
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
		console.log(this.$refs.aaaa);
		console.log(document.querySelector('.wrapper'));
		this.scroll = new BScroll(this.$refs.aaaa,{
			probeType:3,
			pullUpLoad:true
		})
		this.scroll.on('scroll',(position)=>{
			console.log(position);
		})
		this.scroll.on('pullingUp',()=>{
			console.log('上拉加载更多');
		})
	},
	methods: {
		aaaaa() {
			console.log('1111')
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