import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemonDetails } from '../actions';

function mapStateToProps(state) {  
    return {
        pokemondetails: state.pokemonDetails,
    };
}

class ImageView extends Component {
    componentDidMount() {
        this.props.getPokemonDetails(this.props.match.params.id);
    }

    render() {
        if (this.props.pokemondetails) {
            const pokemon = this.props.pokemondetails;
            // name, picture, height, weight, type, and most common ability/move.
            return (
                <div className="detail_container">
                    <div className='pokemon_details'>
                        <img src={pokemon.sprites.front_default} alt='{pokemon.id}' />
                        <div className='pokemon_title'>
                            {pokemon.name}
                            <div className='pokemon_types'>
                            {pokemon.types.map(type => 
                                <span key={type.slot} className={type.type.name}> {type.type.name} </span>
                            )}
                            </div>
                        </div>
                        <p><b>Weight: </b> {pokemon.weight} lbs.</p>
                        <p><b>Height: </b> {pokemon.height} M</p>
                        <p><b>Common Moves: </b> 
                            {pokemon.moves[0].move.name}
                        </p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='detail_container loading'>Loading ... </div>
            )
        }
    }
}

// const ImageView = ({ match }) => { 
//     console.log(match);
//     return (
//         <div></div>
//     )
// }
//     const image = pokemon.find(x => x.id === match.id);

//     if (!image) {
//       return <div>Image not found</div>;
//     }
  
//     return (
//       <div>
//         <h1>{image.title}</h1>
//       </div>
//     );
// };

export default connect(mapStateToProps, { getPokemonDetails })(ImageView);
