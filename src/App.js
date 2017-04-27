import React, { Component } from 'react'
import './App.css'

/*
  1. Grab the data and set the state first
*/

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        matches: [],
        match: {}
      }
    }
    componentDidMount() {
      fetch('https://cricscore-api.appspot.com/csa')
      .then(res => res.json())
      .then((json) => {
        console.log(json)
        this.setState({
          matches: json
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
    render() {
      const { matches } = this.state
      const data = matches.map((item, index) => {
        return (
          <tr key={item.id}>
            <td>{item.t1}</td>
            <td>{item.t2}</td>
            <td>{item.id}</td>
          </tr>
        )
      })
      return (
        <div className="App">
          <table>
            <tbody>
              {data}
            </tbody>
          </table>

          {
            Object.keys(match).length !== 0 && match.constructor !== Object ?
            <div>Render your match data here</div> :
            null
          }

        </div>
      )
    }
}

export default App
