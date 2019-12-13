<template>
	<div>
		<tabber>
			<tabberItem path="/home" activeColor="pink">
				<img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
					<div slot="item-text">首页</div>
			</tabberItem>
			<tabberItem path="/category" activeColor="pink">
				<img  slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
					<div slot="item-text">分类</div>
			</tabberItem>
			<tabberItem path="/cart" activeColor="pink">
				<img  slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
					<div slot="item-text">购物车</div>
			</tabberItem>
			<tabberItem activeColor="pink" path='/profile'>
				<img  slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
					<div slot="item-text">我的</div>
			</tabberItem>
		</tabber>
	</div>
</template>
<script>
import tabber from 'components/common/tabber/Tabber'
import tabberItem from 'components/common/tabber/TabberItem';
export default {
	components:{
		tabber,
		tabberItem
	},
}
</script>
