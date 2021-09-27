import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);

        //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
        // to.this.state
        this.state = { lat: null };

        // Geolocation API
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Call setState!!
                this.setState({lat: position.coords.latitude});
            },
            err => console.log(err)
        );
    }

    // React says we have to define render
    render(){


        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));