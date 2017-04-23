import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                match : 'no match',
                result: 'no result'
            }
    }
    
    componentWillMount() {
        fetch('https://cricscore-api.appspot.com/csa', {
            mode: 'no-cors'
        }).then(function (response) {
            response.json()
        }).then(function(json) {
            console.log(json);
        })
    }

    render() {
    return (
      <div className="App">
        <div>
            <span>{this.state.match}</span>
            <span>{this.state.result}</span>
        </div>
      </div>
    );
    }
}

export default App;
