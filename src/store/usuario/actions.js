import * as api from '@/api/usuario';
import * as types from './types'
import router from '../../router'

export const syncUsuarioAction = ({ commit }, params) => {
    api.syncUsuario(params)
        .then((response) => {
            const { data } = response;
            commit(types.SYNC_USUARIO, data)
        }).catch((e) => {
            router.push('/login-again')
            throw new TypeError(e, 'error', 10);
        });

};
