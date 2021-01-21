import Vue from 'vue'
import Router from 'vue-router'
import about from './views/About'
import home from './views/Home'
import login from './views/Login'
import register from './views/Register'
import downloads from './views/Downloads'
import logout from './views/Logout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresLogged: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: downloads,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
