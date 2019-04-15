import * as types from './types'
import * as api from '@/api/nota'

export const notasAction = ({ commit }) => {
    console.log('action')
    api.syncNotas()
        .then((response) => {
            console.log(response)
            const { data } = response;
            commit(types.SYNC_NOTAS, data)
        }).catch((e) => {
            console.log(e)
            // throw new TypeError(e, 'error', 10);
        });
};
export const syncNotaAction = ({ commit }) => {
    api.syncNota()
        .then((response) => {
            const { data } = response;
            commit(types.SYNC_NOTA, data)
        }).catch((e) => {
            console.log(e)
            // throw new TypeError(e, 'error', 10);
        });

};
