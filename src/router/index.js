import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

// import Startproject from '../views/Startproject.vue'

// import Signup from '../views/Signup.vue'

import { fb } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  //Dashboard
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue'),
        meta: { requiresAuth: true },
      },
 
      {
        path: 'projectlist',
        name: 'projectlist',
        component: () => import(/* webpackChunkName: "Projectlist" */ '../views/Projectlist.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'joblist',
        name: 'joblist',
        component: () => import(/* webpackChunkName: "Joblist" */ '../views/Joblist.vue'),
        meta: { requiresAuth: true }
      },
    ]
  },

  

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/job',
    name: 'Job',
    component: () => import(/* webpackChunkName: "job" */ '../views/Job.vue')
  },

  {
    path: '/startproject',
    name: 'Startproject',
    component: () => import(/* webpackChunkName: "startproject" */ '../views/Startproject.vue')
  },
  {
    path: '/ourwork',
    name: 'Ourwork',
    component: () => import(/* webpackChunkName: "ourwork" */ '../views/Ourwork.vue')
  },

  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  }else if (requiresAuth && currentUser) {
    next()
  }else {
    next()
  }
})

export default router
