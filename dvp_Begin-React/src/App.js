import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data : [],
      message : "Look",
      type : ""
    };
    this.changeMesssage = this.changeMesssage.bind(this);
    this.insertDate = this.insertDate.bind(this);
  }

 changeMesssage(){
    this.setState({message : "Like"});
  }
  insertDate(){
    var item = "React";
    var myArray = this.state.data;
    myArray.push(item);
     this.setState({data : myArray});
   }
    render(){

      return(
          <div>
            <Header/>
            <Content title="dvp React App" name="dvp dev" price="free"/>
            <Footer/>
            <h3>{this.state.message}</h3>
            <button onClick={this.changeMesssage}>{this.state.message}</button>
            <br/>
            <h3>{this.state.data}</h3>
            <button onClick={this.insertDate}>Inset Data</button>
          </div>
      );
    }
}

export default App;
