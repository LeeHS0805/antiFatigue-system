import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login/Login";
import Profile from "../views/main/profile/Profile";
import SignIn from "../views/login/SignIn";
import Settings from "../views/main/profile/Component/Settings";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path: '/login',
    name:'login',
    component: Login
  },
  {
    path: '/profile',
    name:'profile',
    component: Profile
  },
  {
    path: '/signIn',
    name:'signIn',
    component: SignIn
  },
  {
    path: '/settings',
    name:'settings',
    component: Settings
  }
]

const router = new VueRouter({
  routes
})

export default router
