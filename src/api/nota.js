import * as http from './http';


export const syncNotas = function() {
    return http.getRequest('/listar-notas');
}

export const syncNota = function() {
    return http.getRequest('/buscar-notas/1');
}

