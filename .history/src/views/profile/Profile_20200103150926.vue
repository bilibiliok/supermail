<template>
	<div id="profile">
		<nar-bar class="nav-bar">
			<div slot="center">小马哥商城</div>
		</nar-bar>
		<user-info></user-info>
		<section class="account">
			<div class="account-item">
				<div class="number">
					<span class="balance">0.00</span>元
				</div>
				<div class="account-info">
					我的余额
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import NarBar from 'components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo'
export default {
	data() {
		return {

		}
	},
	components:{
		NarBar,
		UserInfo
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