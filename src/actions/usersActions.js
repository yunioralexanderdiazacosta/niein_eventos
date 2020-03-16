import axios from 'axios';

export function userAdd(user){
    return dispatch => {
        return axios.post('http://localhost:3000/api/usuarios/registro', user)
    }
}