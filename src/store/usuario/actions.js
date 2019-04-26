import * as api from '@/api/usuario';
import * as types from './types'

export const syncUsuarioAction = ({ commit }, params) => {
    api.syncUsuario(params)
        .then((response) => {
            const { data } = response;
            commit(types.SYNC_USUARIO, data)
        }).catch((e) => {
            console.log(e)
            // throw new TypeError(e, 'error', 10);
        });

};
