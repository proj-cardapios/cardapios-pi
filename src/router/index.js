import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  
  {
      path: '',
      component: () => import('@/layouts/Default'),
      meta: {
        requiresAuth: false
      },
      children:[
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: home
  },
  {
    path: '/Cardapios',
    name: 'Cardapio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cardapio1.vue')
  },
  {
    path: '/refeicoes',
    name: 'Refeicoes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Refeicoes.vue')
  },
], 
  },
  {path: "",
    component:()=> import('@/layouts/Blank'),
  children:[
    {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cadastrar',
    name: 'Cadastro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro.vue')
  },
  ]}, 
  
  

]

const router = new VueRouter({
  routes
})

export default router
