 <template>
	 <div class="bottom-bar">
		<div class="check-content">
			 <check-button @click.native="checkClick" :is-checked="isSelectAll" class="check-button"></check-button>
		 	<span>全选</span>
		</div>
		<div class="price">
			合计：{{totalPrice}}
		</div>
		<div @click="calculate" class="calculate">
			去计算({{checkLength}})
		</div>
	 </div>
 </template>
 <script>
 import CheckButton from 'components/content/checkButton/CheckButton'
 import { mapGetters } from "vuex";
 export default {
	data() {
		return {

		}
	},
	components:{
		CheckButton
	},
	computed: {
		...mapGetters(['cartList']),
		totalPrice() {
			return '￥' + this.cartList.filter(item => {
				return item.checked
			}).reduce((preValue, item) =>{
				// reduce 高阶函数 计算价格总和
				return preValue + item.price * item.count
			}, 0).toFixed(2)
		},
		// 计算选中个数
		checkLength() {
			return this.cartList.filter(item =>{
				return item.checked
			}).length
		},
		isSelectAll() {
			if(this.cartList.length === 0) {
				return false
			} else{
				// 1.通过find判断
				// return !(this.cartList.find(item=> !item.checked))
				//2.通过filter
				// return !this.cartList.filter(item => !item.checked).lengh
				// 3.通过普通遍历
				for(let item of this.cartList) {
					if(!item.checked) {
						return false
					}
				}
				return true
			}
		}
	},
	methods: {
		...mapGetters(['cartList']),
		checkClick() {
			console.log(1111111);
			
			// 原来都是选中的，点击全选择，原来的有没选的，点击全选
			if(this.isSelectAll) { // 
				this.cartList.forEach(item => {
					item.checked = false
				})
			} else { // 有部分或者全部选中
				this.cartList.forEach(item => {
					item.checked = true
				})
			}
			// this.cartList.forEach(item => item.checked = !this.isSelectAll);
		},
		calculate() {
			this.$toast.showMessage('请选择需要的商品',2000)
		}
	},
 }
 </script>
 <style scoped>
	 .bottom-bar {
		 height: 40px;
		 background-color:#eee;
		 position: relative;
		 line-height: 40px;
		 display: flex;
		 font-size: 14px
	 }
	 .check-content{
		display: flex;
		align-items: center;
		margin-left: 10px;
		width: 60px;
	 }
	 .check-button {
		 width: 20px;
		 height: 20px;
		 line-height: 20px;
		 margin-right: 5px;
	 }
	 .price{
		 margin-left: 30px;
		 flex: 1;
		 text-align: center
	 }
	 .calculate{
		 background-color: #f00;
		 color: #fff;
		 width: 90px;
		 text-align: center
	 }
 </style>