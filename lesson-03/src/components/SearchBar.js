import React from "react";
import App from "./App";

class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit(event){
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value.toUpperCase() })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;