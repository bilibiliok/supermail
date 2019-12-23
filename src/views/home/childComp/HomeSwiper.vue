<template lang="">
	<swiper>
		<swiper-item v-for="item in banners" :key="item.img">
			<a :href="item.link">
				<img @load="imgLoad" :src="item.image" alt="">
			</a>
		</swiper-item>
	</swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
	components:{
		Swiper,
		SwiperItem
	},
	props:{
		banners:{
			type:Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			isLoad: false
		}
	},
	methods: {
		imgLoad() {
			if(!this.isLoad) {
				this.$emit('swiperImageLoad')
				this.isLoad = true
			}
		}
	},
}
</script>