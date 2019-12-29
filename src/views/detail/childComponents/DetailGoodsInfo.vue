<template>
	<div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
		<div class="info-desc clear-fix">
			<div class="start">
			</div>
			<div class="desc">{{detailInfo.desc}}</div>
			<div class="end"></div>
		</div>
		<div class="info-key">{{detailInfo.detailImage[0].key}}</div>
		<div class="info-list">
			<img @load="imageLoad" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="">
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			count:0,
			imageLength:0
		}
	},
	props:{
		detailInfo:{
			type: Object
		}
	},
	methods:{
		imageLoad() {
			//  判断所有图片是否加载完毕
			if (++ this.count === this.imageLength) {
				this.$emit('imageLoad')
			}
		}
	},
	watch:{
		detailInfo() {
			this.imageLength = this.detailInfo.detailImage[0].list.length
		}
	}
}
</script>
<style scoped>
	.info-desc .start ,.info-desc .end{
		width: 90px;
		height: 1px;
		background-color: #a3a3a5;
		position: relative;
	}
	.info-desc .start::before, .info-desc .end::after {
		content: '';
		position: absolute;
		width: 5px;
		height: 5px;
		background-color: #333;
		bottom: 0;
	}
	.info-desc .end::after{
		right: 0
	}
	.info-desc .end{
		float: right
	}
	.info-desc .desc{
		padding: 15px 0;
		font-size: 14px
	}
	.info-desc{
		padding: 0 15px
	}
	.info-key{
		margin: 10px 0 10px 15px;
		color: #333;
		font-size: 15px;
	}
	.info-list img {
		width: 100%;
	}
</style>