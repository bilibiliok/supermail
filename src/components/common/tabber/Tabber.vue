<template>
	<div>
		<div id="tab-bar">
			
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style scoped>
	#tab-bar{
		display: flex;
		background: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0px -3px 8px rgba(100,100,100,.2);
		z-index: 9
	}
	
</style>