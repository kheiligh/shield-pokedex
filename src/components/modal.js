import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemonDetails } from '../actions';

function mapStateToProps(state) {  
    return {
        pokemondetails: state.pokemonDetails,
    };
}

class Modal extends Component {
    constructor(props) {
        super(props)
        this.handleBackClick = this.goBack.bind(this);
    }
    
    componentDidMount() {
        this.props.getPokemonDetails(this.props.match.params.id);
    }

    goBack(event) {
        this.props.history.goBack();
    }
    render() {
        if (this.props.pokemondetails) {
            const pokemon = this.props.pokemondetails;
            // name, picture, height, weight, type, and most common ability/move.
            return (
                <div
                    onClick={this.handleBackClick}
                    style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    background: "rgba(0, 0, 0, 0.15)"
                    }}
                >
                    <div
                        className="modal"
                        style={{
                        position: "absolute",
                        background: "#fff",
                        top: 25,
                        left: "10%",
                        right: "10%",
                        padding: 15,
                        border: "2px solid #444"
                        }}
                    >
                        <img src={pokemon.sprites.front_default} alt='{pokemon.id}' />
                        <p>Name: {pokemon.name}</p>
                        <p>Weight: {pokemon.weight}</p>
                        <p>
                            Type: 
                            {pokemon.types.map(type => 
                                <span key={type.slot}>{type.type.name}</span>
                            )}
                        </p>
                        <button type="button">Close</button>                        
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}
export default connect(mapStateToProps, { getPokemonDetails })(Modal);