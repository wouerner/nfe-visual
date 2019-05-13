import * as http from './http';


export const syncNotas = function() {
    return http.getRequest('/listar-notas');
}

export const syncNota = id =>  http.getRequest('/buscar-notas/'+ id);

