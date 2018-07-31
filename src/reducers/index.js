import { ADD_POKEMON, CLEAR_DETAILS, SET_RESULTS, SET_DETAILS } from '../constants';

const initialState = {
    pokemon: [],
    searchResults: [],
    pokemonDetails: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POKEMON: 
            return { ...state, pokemon: action.payload };
        case SET_RESULTS:
            return { ...state, searchResults: action.payload }
        case SET_DETAILS:
            return { ...state, pokemonDetails: action.payload }
        case CLEAR_DETAILS: 
            return { ...state, pokemonDetails: null }
        default:
            return state;
    }
};

export default rootReducer;