<template>
	<div>
		
	</div>
</template>
<script>
export default {
	props:{
		listData:{
			wx.getNetworkType({
				success: (result)=>{
					
				},
				fail: ()=>{},
				complete: ()=>{}
			});
		}
	}
}
</script>