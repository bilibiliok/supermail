<template>
	<div>
		<nar-bar>
			<div @click="back" slot="left" class="back">
				<img src="~assets/img/common/back.svg" alt="">
			</div>
			<div slot="center" class="title">
				<div @click="titleClick(index)" :class="{active: index === currentIndex}" class="title-item" v-for="(item,index) in title" :key="item">{{item}}</div>
			</div>
		</nar-bar>
	</div>
</template>
<script>
import NarBar from 'components/common/navbar/NavBar'
export default {
	data() {
		return {
			iid:'',
			title: ['商品','参数','评论','推荐'],
			currentIndex:0
		}
	},
	components:{
		NarBar
	},
	created() {
		this.iid = this.$route.params.iid
	},
	methods:{
		titleClick(index) {
			this.currentIndex  = index
			this.$emit('titleClick',index)
		},
		back() {
			this.$router.push('/home')
			
		}
	}
}
</script>
<style scoped>
	.title{
		display: flex
	}
	.title-item{
		flex: 1;
		font-size: 13px
	}
	.active{
		color: var(--color-high-text)
	}
	.back{
		margin-top: 10%;
	}
</style>