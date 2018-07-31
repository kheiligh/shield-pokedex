import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list';
import Form from './form';
import { getPokemonList } from '../actions';

function mapStateToProps(state) {  
    return {
        pokemon: state.pokemon,
        searchResults: state.searchResults
    };
}

class HomeComponent extends Component {
        
    componentDidMount() {
        this.props.getPokemonList();
    }
    
    render() {
      return (
        <div>
            <div>
                <h2>Searchable Pokemon Index</h2><br/>
                <Form pokemon={this.props.pokemon} />
                <List pokemon={this.props.searchResults}/>
            </div>
            {/* <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form />
            </div> */}
        </div>
      )
    }
}

export default connect(mapStateToProps, { getPokemonList })(HomeComponent);  

// export default HomeComponent;