<template>
    <div class="shop-info">
      <div class="shop-top">
        <img :src="shop.logo">
        <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop-middle">
        <div class="shop-middle-item shop-middle-left">
          <div class="info-sells">
            <div class="sells-count">
              {{shop.sells | sellCountFilter}}
            </div>
            <div class="sells-text">总销量</div>
          </div>
          <div class="info-goods">
            <div class="goods-count">
              {{shop.goodsCount}}
            </div>
            <div class="goods-text">全部宝贝</div>
          </div>
        </div>
        <div class="shop-middle-item shop-middle-right">
          <table>
            <tr v-for="(item, index) in shop.score" :key="index">
              <td>{{item.name}}</td>
              <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
              <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "DetailShopInfo",
    props: {
		  shop: {
		    type: Object
      }
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
	}
</script>

<style scoped>
  .shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8
  }
  .shop-top{
    /* 让元素垂直居中对齐 */
    display: flex;
    align-items: center;
    line-height: 45px;
  }
  .shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1)
  }
  .title{
    margin-left: 10px;
    vertical-align: center;
  }
  .shop-middle{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .shop-middle-item{
    flex: 1
  }
  .shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid  rgba(0,0,0,.1);
  }
  .shop-middle-right{
    color: #333;
    font-size: 13px;
  }
  .shop-middle-right table{
    width: 120px;
    margin-left: 30px
  }
  .shop-middle-right table td{
    padding: 5px 0;
  }
  .shop-middle-right .score{
    color: #5ea732;
  }
  .shop-middle-right .score-better{
    color: #f13e3a;
  }
  .shop-middle-right .better span {
    text-align: center;
    color: #fff;
    background: #5ea732;
  }
  .shop-middle-right .better-more span{
    background: #f13e3a;
  }
  
  .shop-bottom{
    margin-top: 10px;
    text-align: center
  }
  .enter-shop{
    width: 150px;
    font-size: 14px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    background: #f2f5f8;
    display: inline-block
  }
</style>
