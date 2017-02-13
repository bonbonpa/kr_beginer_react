import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data : [],
      message : "Like",
      type : ""
    };
    this.changeMesssage = this.changeMesssage.bind(this);
    this.insertDate = this.insertDate.bind(this);
  }

 changeMesssage(){
    if(this.state.message === "Unlike")
    {
      this.setState({message : "Like"});
    }else{
      this.setState({message : "Unlike"});
    }
  }
  insertDate(){
    var item = "React";
    var myArray = this.state.data;
    myArray.push(item);
     this.setState({data : myArray});
   }
   onChange(event){
     this.setState({type :  event.target.value})
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
            <br/><br/>
            <input type="text" onChange={this.onChange.bind(this)}/>
            <h1>Welcome : {this.state.type}</h1>
          </div>
      );
    }
}

export default App;
