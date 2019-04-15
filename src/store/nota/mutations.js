import * as types from './types'
import vue from 'vue'

export const state = {
    notas: [],
    nota: {} 
}

export const mutations = {
  [types.SYNC_NOTAS] (state, params) {
      state.notas = params
  },
  [types.INSERT_TRADE] (state, params) {
      state.dashboard.trades.push(params)
  },
  [types.UPDATE_TRADE] (state, params) {
    vue.set(state.dashboard.trades, params.index, params)
  },
  [types.REMOVE_TRADE] (state, params) {
    vue.delete(state.dashboard.trades, params)
  },
  [types.REMOVE_ALL_TRADES] (state) {
    vue.set(state.dashboard, 'trades', [])
  },
  [types.INSERT_SESSION] (state, params) {
    let data = state.dashboard.sessions
    data.push(params)

    vue.set(state.dashboard, 'sessions', data)
  },
  [types.REMOVE_ALL_SESSION] (state) {
    vue.set(state.dashboard, 'sessions', [])
  },
  [types.SYNC_NOTA] (state) {
      state.nota = {
             numero: 9,
             modelo: 55,
             serie: 4,
             dtEmissao: '31/01/2019 10:43:26-02:00',
             dtSaidaEntrada: 'N/D',
             valorTotalNotaFiscal: '188,61',
             CNPJ: '10.832.644/0001-08',
             razaoSocial: 'Growth Supplements',
             inscricaoEstadual: '255860099',
             UF: 'SC',
             CPF: '111.111.111-91',
             razaoSocialDestinatario: 'Kleber C. S. ',
             UFDestinatario: 'DF',
             inscricaoEstadualDestinatario: 'N/D',
             destinoOperacao: '2 - Operação Interestadual',
             consumidorFinal: '1 - Consumidor final',
             presencaComprador: '9 - Operação não presencial (outros)',
             processo: '0 - com aplicativo do Contribuinte',
             versaoProcesso: 'Bling 1.0',
             tipoEmissao: '1 - Normal',
             finalidade: '1 - Normal',
             natureza: 'Venda de mercadorias',
             tipoOperação: ' 1 - Saída',
             formaPagamento: ' N/D',
             digest: 'ycmODCHW3K+G3jp/E2ebEixsyaw=',
            }
  },
}
