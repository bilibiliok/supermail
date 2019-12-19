<template>
	<div class="tab-control">
		<div class="tab-control-item" @click="itemClick(index)" v-for="(item,index) in titles" :key="item" :class="{active:index === currentIndex}">
			<span>{{item}}</span>
		</div>
	</div>
</template>
<script>
// 只是文字不一样的haul不需要插槽
export default {
	data() {
		return {
			currentIndex:0,
		}
	},
	props:{
		titles:{
			type:Array,
			default() {
				return []
			}
		}
	},
	methods: {
		itemClick(index){
			this.currentIndex = index
			this.$emit("tabClick",index)
		}
	},
}
</script>
<style scoped>
 .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>