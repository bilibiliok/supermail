<template>
	<div id="list">
      <div v-for="(item, index) in listData" :key="index" class="item">
        <span class="icon">
          <svg :fill="item.iconColor"><use :xlink:href="item.icon"></use></svg>
        </span>
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>
<script>
export default {
	props:{
		listData:{
			type: Array,
			default() {
				return
			}
		}
	}
}
</script>
<style scoped>
	#list{
		background-color: #fff;
		color: #333;
		font-size: 15px
	}
	.item>.info{
		margin-left: 40px;
		padd-
	}
</style>