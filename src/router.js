import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//       {
//           path: '/nfe/nota',
//           name: 'nota',
//           component: () => import(/* webpackChunkName: "nota" */ './nfe/views/Nota.vue')
//       },
//       {
//           path: '/nfe/listar',
//           name: 'notas',
//           component: () => import(/* webpackChunkName: "notas" */ './nfe/views/Notas.vue')
//       },
//       {
//           path: '/nfe',
//           name: 'home',
//           component: () => import(/* webpackChunkName: "notas" */ './nfe/views/Home.vue')
//       },
//       {
//           path: '/nfe/:token',
//           name: 'home',
//           component: () => import(/* webpackChunkName: "notas" */ './nfe/views/Home.vue')
//       },
//       {
//           path: '/nfe/cadastrar',
//           name: 'cadastrar',
//           component: () => import(/* webpackChunkName: "cadastrar" */ './nfe/views/Cadastrar.vue')
//     }
//   ]
// })

const routes =  [
      {
          path: '/nfe/nota',
          name: 'nota',
          component: () => import(/* webpackChunkName: "nota" */ './nfe/views/Nota.vue')
      },
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
          component: () => import(/* webpackChunkName: "notas" */ './nfe/views/Home.vue')
      },
      {
          path: '/nfe/cadastrar',
          name: 'cadastrar',
          component: () => import(/* webpackChunkName: "cadastrar" */ './nfe/views/Cadastrar.vue')
      },
      {
          path: '/login-again',
          name: 'login-again',
          component: () => import(/* webpackChunkName: "LoginAgain" */ './nfe/views/LoginAgain.vue')
      }
  ]

// export default new Router({ routes });
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

    //console.log(to.params.token)
    if (to.name === 'home' && !to.params.token) {
       return  next('/login-again')
    }

    if(typeof usuario === 'undefined'){
       return  next('/login-again')
    }

    next()
});

export default router;
