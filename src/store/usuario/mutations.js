import * as types from './types'

export const state = {
  usuario: {}
}

export const mutations = {
  [types.SYNC_USUARIO] (state, params) {
    state.usuario = params
  }
}
