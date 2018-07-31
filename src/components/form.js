import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setSearchResults } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        setResults: results => dispatch(setSearchResults(results))
    };
}

class ConnectedForm extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
        if(event.target.value.length > 1) {
            const searchResults = this.props.pokemon.filter(x => x.name.indexOf(event.target.value) > -1);

            this.props.setResults({ searchResults });
        } else {
            this.props.setResults( null );
        }
    }
    // }
    render() {
        const searchValue = this.state.searchValue;
        return (
            <div className="form-group">
                <label htmlFor="title" className="form-label" >Pokemon Name: </label> 
                <input
                    type="text"
                    className="form-control"
                    id="searchValue"
                    value={searchValue}
                    placeholder="enter at least 3 characters"

                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;