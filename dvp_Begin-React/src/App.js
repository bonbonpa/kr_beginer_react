import React, { Component } from 'react';

class App extends Component {
    render(){
      var dvpStyle = {
        fontSize : 100,
        color : 'lightblue'
      }
      return(
          <div>
            <h1 style={dvpStyle}>React bonbonpa begin test</h1>
            <h3>{100 * 55}</h3>
          </div>
      );
    }
}

export default App;
