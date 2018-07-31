import { ADD_POKEMON, SET_RESULTS, SET_DETAILS } from '../constants';

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
        default:
            return state;
    }
};

export default rootReducer;