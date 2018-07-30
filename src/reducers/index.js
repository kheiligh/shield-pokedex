import { ADD_POKEMON, SET_RESULTS } from '../constants';

const initialState = {
    pokemon: [],
    searchResults: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POKEMON: 
            return { ...state, pokemon: action.payload };
        case SET_RESULTS:
            return { ...state, searchResults: action.payload }
        default:
            return state;
    }
};

export default rootReducer;