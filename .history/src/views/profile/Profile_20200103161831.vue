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
			<div class="account-item">
				<div class="number">
					<span class="balance">0</span>个
				</div>
				<div class="account-info">
					我的优惠
				</div>
			</div>
			<div class="account-item">
				<div class="number">
					<span class="balance">0</span>分
				</div>
				<div class="account-info">
					我的积分
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
			orderList: [
			{icon: '#order', iconColor: '#ff8198', info: '我的消息'},
			{icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
			{icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
			],
			serviceList: [
			{icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
			{icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
			]
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
	.account{
		display: flex;
	}
	.account-item{
		padding: 18px;
		font-size: 13px;
		background-color: #fff;
		margin-right: 1px;
		width: 100%;
		text-align: center
	}
	.account-item .balance{
		font-weight: 700;
		color: #ff5f3e;
		font-size: 24px;
	}
</style>