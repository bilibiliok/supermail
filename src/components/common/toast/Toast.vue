<template>
	<div v-show="show" class="toast">
		<div>{{message}}</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			message: '',
			show: false
		}
	},
	// props:{
	// 	message: {
	// 		type: String,
	// 		default: ''
	// 	},
	// 	show: {
	// 		type: Boolean,
	// 		default: false
	// 	}
	// },
	methods: {
		showMessage(message='默认文字',duration=2000) {
			this.message = message
			this.show = true
			setTimeout(() =>{
				this.show = false
				this.message = ''
			},duration)
		}
	},
}
</script>
<style scoped>
	.toast{
		position: fixed;
		background-color: rgba(0, 0, 0, .8);
		color: #fff;
		top: 50%;
		left: 50%; 
		transform: translate(-50%, -50%);
		padding: 8px 10px;
		z-index: 100000;
	}
</style>