import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/nfe/nota',
          name: 'nota',
          component: () => import(/* webpackChunkName: "nota" */ './nfe/views/Nota.vue')
      },
      {
          path: '/nfe/listar',
          name: 'notas',
          component: () => import(/* webpackChunkName: "notas" */ './nfe/views/Notas.vue')
      },
      {
          path: '/nfe',
          name: 'home',
          component: () => import(/* webpackChunkName: "notas" */ './nfe/views/Home.vue')
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
    }
  ]
})
