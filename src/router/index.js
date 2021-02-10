import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login/Login";
import Profile from "../views/main/profile/Profile";
import SignIn from "../views/login/SignIn";
import Settings from "../views/main/profile/Component/Settings";
import Info from "../views/main/profile/Component/Info";
import Contact from "../views/main/profile/Component/Contact";
import dsbrige from "dsbridge";
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
    component: Settings,
  },
  {
    path: '/contact',
    name:'contact',
    component: Contact,
  },
  {
    path: '/info',
    name:'info',
    component: Info,
  }
]
const router = new VueRouter({
  routes
})

let pathArr=['/','/login','/signIn']
router.beforeEach((to,from,next)=>{
  let flag=true;
  pathArr.forEach(item=>{
    if(item==to.path){
      flag=false;
    }
  })
  if(flag){
    if (process.env.NODE_ENV === "development") {
      if(localStorage.getItem('token'))return next()
      return next({path:'/login'})
    }
    else {
      if(dsbrige.call("getToken")){
        return next();
      }
      else return next({path:'/login'})
    }
  }
  next()
})

export default router
