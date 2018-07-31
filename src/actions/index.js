import { ADD_POKEMON, SET_RESULTS, SET_DETAILS, CLEAR_DETAILS } from '../constants';
import Axios from 'axios';
// export const addPokemon = pokemon => ({ type: ADD_POKEMON, payload: pokemon});
export function getPokemonList(dispatch) {
    return dispatch => {
        Axios.get('https://pokeapi.co/api/v2/generation/1/').then(function(resp) {
            const values = resp.data.pokemon_species.map(element => {
                let url = element.url.substr(0, element.url.length-1);
                let num = url.substr(url.lastIndexOf('/') + 1, url.length);
                let imgSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + num + '.png'
                return { 
                    id: num,
                    imgSrc: imgSrc,
                    ...element
                }
            });
            dispatch({
                type: ADD_POKEMON,
                payload: values
            });
        }).catch(error => {
            alert('Services failure getting full list: ' + error);
        });
    }
}

export function getPokemonDetails(pokeId) {
    return dispatch => {
        Axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeId + '/').then(function(resp) {
            
            dispatch({
                type: SET_DETAILS,
                payload: resp.data
            });
        }).catch(error => {
            alert('Services failure getting details: ' + error);
        });
    }
}

export function clearDetails() {
    return dispatch => {
    dispatch({
        type: CLEAR_DETAILS,
        payload: null
        });
    }
}

export const setSearchResults = results => ({ type: SET_RESULTS, payload: results});
