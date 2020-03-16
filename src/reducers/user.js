import { ADD_USER } from '../actions/types';

const initialState = {
    usuarios: [] 
}

export default function (state = initialState, action){
    switch(action.type){
        case ADD_USER: 
        return {
            ...state,
            usuarios: [...state.usuarios, action.payload]
        }
        default: 
        return state;
    }
}