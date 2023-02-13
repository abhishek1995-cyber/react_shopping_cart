import { createStore } from 'redux';

function cartReducer(
    state = {selectedOrder: "", isOpen:false} ,
    action 
){
    switch(action.type){
        case  'SELECTED':
            return {
            ...state, selectedOrder: action.payload
        }
        case  'OPEN':
            return {
            ...state, isOpen: action.payload
        }
        case  'CLOSE':
            return {
            ...state, isOpen: action.payload
        }
        default:
            return state
    }
}

let store = createStore(cartReducer);

export default store;
