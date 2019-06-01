import * as types from './types'

export const state = {
  certificado: {}
};

export const mutations = {
  [types.SYNC_CERTIFICADO] (state, params) {
    state.certificado = params;
    localStorage.setItem('certificado', JSON.stringify(params));
  },
};
