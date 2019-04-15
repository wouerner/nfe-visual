import * as http from './http';


export const syncNotas = function() {
    return http.getRequest('/nota');
}

export const syncNota = function() {
    return http.getRequest('/nota');
}

