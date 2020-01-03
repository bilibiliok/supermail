<template>
	<div id="profile">
		<nar-bar class="nav-bar">
			<div slot="center">小马哥商城</div>
		</nar-bar>
	</div>
</template>
<script>
import NarBar from 'components/common/navbar/NavBar'
export default {
	data() {
		return {

		}
	},
	components:{
		NarBar
	}
}
</script>
<style  scoped>
	#profile {
		background-color: #f2f2f2;
	}

	.nav-bar {
		background-color: var(--color-tint);
		font-weight: 700;
		color: #fff;
	}
</style>