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
                <div>
                    <img src={pokemon.sprites.front_default} alt='{pokemon.id}' />
                    <p>Name: {pokemon.name}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>
                        Type: 
                        {pokemon.types.map(type => 
                            <span key={type.slot}>{type.type.name}</span>
                        )}
                    </p>
                    
                </div>
            );
        } else {
            return (
                <div></div>
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
