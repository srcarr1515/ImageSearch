import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event){
        event.target.value
    }

    render () {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" onChange={this.onInputChange}/>
                </div>
            </form>
        </div>
            );
    }
}
// We do not put parenthesis '()' on event handlers like onChange... This will call this function when it is rendered. By leaving the '()' off we are telling it that
// this function is going to be called later and that the value of the text input will be what goes into the '()'.

// alt syntax
//  
// onChange{(event) => console.log(event.target.value)} <---- Use this when you have a very simple function on an event handler.
//


export default SearchBar;