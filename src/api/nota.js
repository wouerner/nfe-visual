import * as http from './http';


export const syncNotas = function() {
    return http.getRequest('/nota');
}

