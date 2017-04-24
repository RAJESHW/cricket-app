import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      match : 'no match',
      result: 'no result'
    }
  }

  /*
    INSTALL
    CORS chrome extension and enable it and then run the server
    https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
    Keep the extension disabled for other than the development
  */

  // componentDidMount is the right lifecycle method for a network call
  componentDidMount() {
    fetch('https://cricscore-api.appspot.com/csa')
    .then((res) => {
      // You were not returning the JSON to the next then()
      return res.json()
    })
    .then((json) => {
      console.log(json)
    })
    .catch((err) => {
      console.log(err)
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
    )
  }
}

export default App
