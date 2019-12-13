<template>
	<div @click="itemClick" class="tab-bar-item">
		<div v-if="!isActive"><slot  name="item-icon"></slot></div>
		<div v-else ><slot name="item-icon-active"></slot></div>
		<!-- <div :class="{dev:isActive}" ><slot name="item-text"></slot></div> -->
		<div :style="activeStyle" ><slot name="item-text"></slot></div>
	</div>
	<!-- <div class="tab-bar-item">
		<img src="../assets/img/tabber/classification.png" alt="">
		分类
	</div>
	<div class="tab-bar-item">
		<img src="../assets/img/tabber/shoppingCar.png" alt="">
		购物车
	</div>
	<div class="tab-bar-item">
		<img src="../assets/img/tabber/my.png" alt="">
		我的
	</div> -->
</template>
<script>
export default {
	props:{
		path:{
			type:String
		},
		activeColor:{
			type:String,
			default:'red'
		}
	},
	data() {
		return {
			// isActive: true
		}
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path) !== -1
		},
		activeStyle() {
			return this.isActive ? {color:this.activeColor}:{}
		}
	},
	methods: {
		itemClick() {
			this.$router.replace(this.path)
		}
	},
}
</script>
<style scoped>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		margin-top: 5px
	}
	.tab-bar-item img{
		height: 24px;
		width:24px;
		vertical-align: middle;
		margin-bottom: 2px
	}
	.dev{
		color:#f00
	}
</style>