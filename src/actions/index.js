import { ADD_POKEMON, SET_RESULTS } from '../constants';
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
            console.log(error);
        });
    }
}

export const setSearchResults = results => ({ type: SET_RESULTS, payload: results});
