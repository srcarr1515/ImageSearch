import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term)
        this.props.searchSubmit(this.state.term);
    }

    render () {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}/>
                </div>
            </form>
        </div>
            );
    }
}
// We do not put parenthesis '()' on event handlers like onChange... This will call this function when it is rendered. By leaving the '()' off we are telling it that
// this function is going to be called later and that the value of the text input will be what goes into the '()'.
// 
// Controlled vs Uncontrolled Elements
// React should be driving all the changes... This may seem redundant... But very clearly React is controlling the dom element.
// 
// In the constructor function -  this.state.term = this.state.term.bind(this) **Binding is a possible fix.


export default SearchBar;