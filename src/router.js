import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes =  [
      {
          path: '/nfe/nota/:id',
          name: 'nota',
          component: () => import(/* webpackChunkName: "nota" */ './nfe/views/Nota.vue')
      },
      {
          path: '/nfe/listar',
          name: 'notas',
          component: () => import(/* webpackChunkName: "notas" */ './nfe/views/Notas.vue')
      },
      {
          path: '/nfe/:token',
          name: 'home',
          component: () => import(/* webpackChunkName: "Home" */ './nfe/views/Home.vue')
      },
      {
          path: '/login-again',
          name: 'login-again',
          component: () => import(/* webpackChunkName: "LoginAgain" */ './nfe/views/LoginAgain.vue')
      }
  ]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});

router.beforeEach(function(to, from, next) {
    const usuario = localStorage.getItem('usuario')

    if (to.name === '/login-again') {
        return next()
    }

    if (to.name === 'home' && !to.params.token) {
       return  next('/login-again')
    }

    if(typeof usuario === 'undefined'){
       return  next('/login-again')
    }
    console.log('te')

    next()
});

export default router;
