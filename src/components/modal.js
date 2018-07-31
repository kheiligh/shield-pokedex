import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearDetails, getPokemonDetails } from '../actions';

function mapStateToProps(state) {  
    return {
        pokemondetails: state.pokemonDetails,
    };
}

class Modal extends Component {
    constructor(props) {
        super(props)
        this.handleCloseClick = this.goBack.bind(this);
        this.handleBackGroundClick = this.handleBackGroundClick.bind(this);
    }
    
    componentDidMount() {
        this.props.getPokemonDetails(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearDetails();
    }

    goBack(event) {
        this.setState( { pokemondetails: null });
        this.props.history.goBack();
    }
    handleBackGroundClick(event) {
        this.setState( { pokemondetails: null });
        if(event.target === event.currentTarget) this.props.history.goBack();
    }
    render() {
        if (this.props.pokemondetails) {
            const pokemon = this.props.pokemondetails;
            // name, picture, height, weight, type, and most common ability/move.
            return (
                <div className='modal_cover' onClick={this.handleBackGroundClick}>
                    <div className='modal'>
                        <div className='close_modal' onClick={this.handleCloseClick}>X</div>
                        <div className='modal_content'>
                            <img src={pokemon.sprites.front_default} alt='{pokemon.id}' />
                            <div className='modal_title'>
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
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}
export default connect(mapStateToProps, { getPokemonDetails, clearDetails })(Modal);