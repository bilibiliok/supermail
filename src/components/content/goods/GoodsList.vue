<template>
	<div class="goods">
		<good-list-item v-for="(item) in goods" :key="item.id" :goods-item="item"></good-list-item>
	</div>
</template>
<script>
import GoodListItem from './GoodListItem';
export default {
	data() {
		return {

		}
	},
	components:{
		GoodListItem
	},
	props:{
		goods:{
			type:Array,
			default() {
				return []
			}
		}
	},
	created() {
		console.log('good',this.goods)
	},
}
</script>
<style scoped>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		/* position: 2px */
		padding: 2px;
		padding-bottom: 40px;
	}
</style>