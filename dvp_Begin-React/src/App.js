import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
    render(){

      return(
          <div>
            <Header/>
            <Content title="dvp React App" name="dvp dev" price="free"/>
            <Footer/>
          </div>
      );
    }
}

export default App;
