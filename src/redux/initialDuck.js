import axios from 'axios'
import { URL } from './url'

// Constants
const initialData = {
    array: []
}

// Types
const OBTENER_DATOS = 'OBTENER_DATOS' 

// Reducers
export default function initialReducer(state = initialData, action){
    switch(action.type){
        case OBTENER_DATOS:
            return{...state, array: action.payload}
        default:
            return state
    }
}

// Actions
export const initialAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(`${URL}`)
        dispatch({
            type: OBTENER_DATOS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}