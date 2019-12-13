<template>
	<div class="recommend">
		<div class="flex-item" v-for="(item, index) in recommends" :key="index">
			<a :href="item.link">
				<img :src="item.image" />
				<div>{{item.title}}</div>
			</a>
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
		recommends:{
			type:Array,
			default() {
				return []
			}
		}
	}
}
</script>
<style scoped>
	.recommend{
		display: flex;
		width: 100%;
		font-size: 12px;
		text-align: center;
		padding: 15px 0 30px;
		border-bottom: 10px solid #eee
	}
	.flex-item{
		flex:1
	}
	.flex-item img{
		width: 70px;
		flex:1;
		margin-bottom: 10px
		/* height: 80px; */
	}
</style>