import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        match : [],
        condition : 'ShowTable'
      }
      this.showResult = this.showResult.bind(this);
      this.apiFetchCall = this.apiFetchCall.bind(this);
    }
    renderChildren(){
        let matches = this.state.match;
        if(matches.length) {
            return Object.keys(matches)
                .map((item, index) => {
                    return (
                     <tr key={index}>
                        <td>{index+1}.</td>
                        <td>{matches[item]['t1']}</td>
                        <td>{matches[item]['t2']}</td>
                        <td> <a id={matches[item]['id']} onClick={this.showResult} href="#"> Show Result</a></td>
                     </tr>
                    )
                });
        } else {
            return  (<tr>
                        <td>Loading...</td>
                     </tr> );
        }

    }
    individualValue() {
      let matches = this.state.match;
      if(matches.length) {
          return Object.keys(matches)
              .map((item, index) => {
                  return (
                   <tr key={index}>
                      <td>{matches[item].de}</td>
                   </tr>
                  )
              });
      }
    }
    showResult(e) {
      e.preventDefault();
      let match_id = e.target.id;
      console.log(match_id);
      fetch('https://cricscore-api.appspot.com/csa?id='+match_id)
      .then((res) => {
        // You were not returning the JSON to the next then()
        return res.json()
      })
      .then((json) => {
        this.setState({
            match: json,
            condition: 'ShowResults'
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
    apiFetchCall(e) {
      fetch('https://cricscore-api.appspot.com/csa')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        this.setState({
            match: json
        })
      })
      .catch((err) => {
        console.log(err)
      })

    }
    render() {


      return (
        <div className="App">
        <button onClick={this.apiFetchCall}>Show Table</button>
          <table>
            <tbody>
                    { (this.state.condition === 'ShowTable') ? (this.renderChildren()) : (this.individualValue()) }                    }
            </tbody>
          </table>
        </div>
      )
    }
}

export default App
