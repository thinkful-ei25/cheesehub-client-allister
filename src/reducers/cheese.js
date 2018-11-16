import {FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR} from '../actions/cheese'

const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

export default (state=initialState, action) => {
    
    if (action.type === FETCH_CHEESES_REQUEST) {
        return  {
            ...state, 
            loading: true
        }
    }
    else if (action.type === FETCH_CHEESES_SUCCESS) {
        return {
            ...state,
            cheeses: action.cheeses,
            loading: false,
            error: null
        }
    }
    else if (action.type === FETCH_CHEESES_ERROR) {
        return {
            ...state,
            error: action.error,
            loading: false
        }
    }
    return state;
};

