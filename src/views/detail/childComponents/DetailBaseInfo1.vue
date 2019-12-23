<template>
	<div v-if="Object.keys(goods).length !== 0" class="base-info">
		<div class="info-title">
			{{goods.title}}
		</div>
		<div class="info-price">
			<span class="n-price">{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span class="discount">{{goods.discount}}</span>
		</div>
		<div class="info-other">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="info-service">
			<span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index-1].icon">
				<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	props:{
		goods:{
			type: Object
		}
	}
}
</script>
<style scoped>
	.base-info{
		margin-top: 20px;
		padding: 0 8px
	}
	.info-title{
		color: #222
	}
	.n-price{
		color: var(--color-high-text);
		font-size: 24px
	}
	.o-price{
		font-size: 13px;
		margin-left: 5px;
		text-decoration: line-through
	}
	.discount{
		font-size: 13px;
		background: var(--color-high-text);
		color: #fff;
		border-radius: 8px;
		margin-left: 5px;
		position: relative;
		top: -8px;
		padding: 2px 5px
	}
	.info-other{
		line-height: 30px;
		font-size: 13px;
		display: flex;
		margin-top: 15px;
		border-bottom: 1px solid rgba(100, 100, 100, .1);
		justify-content: space-between;
	}
	.info-service{
		display: flex;
		justify-content: space-between;
		line-height: 60px;
		font-size: 13px
	}
	.info-service img{
		width: 14px;
		height: 14px;
		position: relative;
		top: 2px;
	}
	.info-service-item span {
		font-size: 13px;
		color: #333;
	}
	/* .info-other>span{
		flex: 1;
		text-align: center
	} */
</style>