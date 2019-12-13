import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/shoppingcart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
Vue.use(Router)
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
]
export default new Router({
  routes,
  mode:'history'
})
