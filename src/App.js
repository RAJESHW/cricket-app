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
        match: []
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

    _handleClick(id, e){
      fetch('https://cricscore-api.appspot.com/csa?id=' + id)
      .then(res => res.json())
      .then((json) => {
        console.log(json)
        this.setState({
          match: json
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
    render() {

      const { matches, match } = this.state
      console.log(match)
      const data = matches.map((item, index) => {
        return (
          <tr key={item.id}>
            <td>{item.t1}</td>
            <td>{item.t2}</td>
            <td><a onClick={this._handleClick.bind(this, item.id)}>{item.id}</a></td>
          </tr>
        )
      })

      const foo = match.map((item, index) => {
        return <div key={index}>{item.de}</div>
      })


      return (
        <div className="App">
          <table>
            <tbody>
              {data}
            </tbody>
          </table>

          {foo}

        </div>
      )
    }
}

export default App
