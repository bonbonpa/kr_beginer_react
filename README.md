![raect](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSithoqiOTODZ73obUF3Nj5bDueB4HG9PMUNQDVV9ROcKlijncE)
![redux](http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png)

> current update : 2017-03-05


- [Start React](#start-react)
- [Start Redux](#start-redux)

[TOC]

# Start React

ref : [Teach REACT JAVASCRIPT LIBRARY Youtube](https://www.youtube.com/playlist?list=PLEE74DyIkwEnLEw3lBrTsn6EXU6b5aOXr) by
Kong Ruksiam

## 1. Intro React

### install react-app

```sh
$ npm install create-react-app -g
$ npm install create-react-app --save
```

### create project

```
$ create react-app hello-react
```

### And Then Start project
```sh
$ cd hello-react
$ npm start
```


## 2. JSX Syntax

```js
import React, { Component } from 'react';

class App extends Component {
    render(){
      return(
          <div>
            <h1>React bonbonpa begin test</h1>
          </div>
      );
    }
}
export default App;
```

## 3. Style and Expression JSX

```js
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
```

## 4. Create Component

### Create file for Component

#### Header.js

```js
import React, { Component } from 'react';

class Header extends Component{
  render(){

    return(
        <div>
            <h1>dvp Begin Header</h1>
        </div>
    );
  }
}

export default Header;

```

#### Content.js

```js
import React, { Component } from 'react';

class Content extends Component{
  render(){

    return(
        <div>
          <h3>React Body Parser</h3>
        </div>
    );
  }
}

export default Content;
```

#### Footer.js
```js
import React, { Component } from 'react';

class Footer extends Component{
  render(){

    return(
        <div>
            <h5>Footer</h5>
        </div>
    );
  }
}

export default Footer;

```

### And import Component to App.js

```js
import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
    render(){

      return(
          <div>
            <Header/>
            <Content/>
            <Footer/>
          </div>
      );
    }
}

export default App;
```

## 5. Props

### Adding properties to components -> App.js

```js
import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
    render(){

      return(
          <div>
            <Header/>
            ///Add
            <Content title="dvp React App" name="dvp dev" price="free"/>  
            ///Add
            <Footer/>
          </div>
      );
    }
}

export default App;
```

### And Show value of properties -> Contents.js

```js
import React, { Component } from 'react';

class Content extends Component{
  render(){

    return(
        <div>
          <h3>Facebook dvp</h3>
          ///Add
          <p>{this.props.title}</p>
          <p>{this.props.name}</p>
          <p>{this.props.price}</p>
          ///Add
        </div>
    );
  }
}

export default Content;
```

## 6. State

### Add state in file -> Content.js

```js
import React, { Component } from 'react';

class Header extends Component{
  //Add constructor and set state
  constructor(){
    super();
    this.state = {
      name : 'dvpdev',
      count : 0,
    }
  }
//Add
  render(){
    //Add function setTimeout and change state
    setTimeout(() => {
      this.setState({name : "React Tut"});
    },3000);
    //Add function setInterval for increse count
    setInterval(() => {
      this.setState({count : this.state.count + 1});
    },1000);
    //Add
    return(
        <div>
            <h1>dvp Begin Header</h1>
            //Add show name and count for change state
            <h2>{this.state.name}</h2>      
            <h2>{this.state.count}</h2>
            //Add
        </div>
    );
  }
}

export default Header;
```

## 7. Event

### Add Event -> App.js

```js
import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  // Create constructor and set begin state
  constructor(){
    super();
    this.state = {
      data : [],
      message : "Look",
      type : ""
    };
    //binding data when render dom
    this.changeMesssage = this.changeMesssage.bind(this);
    this.insertDate = this.insertDate.bind(this);
  }

//Add function setState change message
 changeMesssage(){
    this.setState({message : "Like"});
  }

//Add function setState for change data
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
            //Add message show data change state
            <h3>{this.state.message}</h3>
            //Add Event onClick for change state
            <button onClick={this.changeMesssage}>{this.state.message}</button>
            <br/>
            //Add data for show
            <h3>{this.state.data}</h3>
            //Add Event onClick for change state
            <button onClick={this.insertDate}>Inset Data</button>
          </div>
      );
    }
}

export default App;

```

## 8. Event OnChange

### Add Event onChange for typing -> App.js

```js
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
   //Add function onChange
   onChange(event){
     this.setState({type :  event.target.value})
   }
   //Add
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
            //Add input , properties onChange and text binding data
            <input type="text" onChange={this.onChange.bind(this)}/>
            <h1>Welcome : {this.state.type}</h1>
            //Add
          </div>
      );
    }
}

export default App;

```

## 9. Router

### Clear App.js for Router

```js
import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {

    render(){

      return(
          <div>

          </div>
      );
    }
}

export default App;
```

### Install React Router

go to folder project

```sh
$ npm install react-router --save
```

### move import component from App.js to index.js

```js
//App.js
import React, { Component } from 'react';
/*move to index.js
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
*/
class App extends Component {

      return(
          <div>

            <h1>dvp dev dev </h1>
            // change path
            <h1><a href="/header">Header</a></h1>
            <h1><a href="/content">Content</a></h1>
            <h1><a href="/footer">Footer</a></h1>
            // change path
          </div>
      );
    }

export default App;
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Add  -> move from App.js
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
//Add Router
import {Router ,Route , Link, browserHistory} from 'react-router';
//Add

ReactDOM.render(
  //Add Router and Route Path
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
      <Route path="/header" component={Header}/>
      <Route path="/content" component={Content}/>
      <Route path="/footer" component={Footer}/>
  </Router>,
  document.getElementById('root')
  //Add
);

```

### Add Home path to Content.js , Header.js , Footer.js

```js
<h1><a href="/">Home</a></h1>
```


------

# Start Redux

## 1. Redux Concept

Redux is manage state data with Application
How to know data will 'Subscibe'

State All keeping in 'Store' who want to 'Edit' data in 'Store' will do 'Dispatch' interest 'State' ? just do 'Subscribe State' it you want

Redux priciple of 3 things
1. **State** with all of system will storing in the one place is called 'Store'.
2. **State is read-only** -> status anything is not change so when event or Action begin sill do create new 'State' continue  old 'State' by not edit older 'State'
3. **Changes are made with pure functions** when begin event 'State' next is it? Is the mission of 'Reducer' which 'Reducer' will is **Pure function** by consider 'State' current + Action it make to 'State' next to begin which 'Reducer' will send new 'State' out only by not change 'State' before utterly.

![redux](http://www.clipular.com/c/6577732714758144.png?k=jKyvyX8ppGBdcVnFdOMKqr0y-Bo)


What have in Store ?
- Dispatch manage 'Action' in change 'State'
- Reducer will calculate 'State' next or keep command will change 'State' is 'Pure Function' receive 'input' is 'Current State' and 'Action Return State' out come


conclusion

- State is status any of work
- Action is Event any heppen.
- Store is place save any 'State' or can call is 'State Container' and 'Notify' go piece at 'subscribe' .
- Reducer is 'pure function' at make 'State' next to by consider 'State' cerrunt and Action is happen.


## 2. Store Reduecer & Dispatch

install redux

```
$ npm install redux -g --save
```

typing code redux

```js

import {createStore} from 'redux';

const reducer = (state,action)=>{
  switch (action.type) {
    case "ADD": //is Action
        state += action.payload;
      break;
    case "SUBTRACT":
        state -= action.payload;
      break;
  }
  return state;
}
const store = createStore(reducer , 15000 );

//subscribe
store.subscribe(()=>{
  console.log("Update Store",store.getState());
})
//change data in Store
store.dispatch({
  type: "ADD",
  payload : 5000
})
store.dispatch({
  type: "SUBTRACT",
  payload : 1000
})
```


## 3. Multi State

```js
import {createStore} from 'redux';

//declare begin of state
const initialState = {
  result : 20000,
  value : []
}
const reducer = (state=initialState,action)=>{
  switch (action.type) {
    case "ADD": //is Action
        state = {
          /*result : state.result ,
          value : state.value*/
          ...state, //show state all
          result: state.result += action.payload,
          value : [...state.value,action.payload]
        }
      break;
    case "SUBTRACT":
    state = {
      /*result : state.result ,
      value : state.value*/
      ...state, //show state all
      result: state.result -= action.payload,
      value : [...state.value,action.payload]
    }
      break;
  }
  return state;
}///
const store = createStore(reducer);

//subscribe
store.subscribe(()=>{
  console.log("Update Store",store.getState());
})
//change data in Store
store.dispatch({
  type: "ADD",
  payload : 10000
})
store.dispatch({
  type: "ADD",
  payload : 14000
})
store.dispatch({
  type: "SUBTRACT",
  payload : 4000
})
```

## 4. Multiple Reducer

```js

import {createStore ,combineReducers} from 'redux';

//declare begin of state
const initialState = {
  result : 20000,
  value : []
}

//Reducer 1
const UserReducer = (state={ name : "nii" , age : 20},action)=>{
  switch (action.type) {
    case "setName": //is Action
        state = {
          ...state, //show state all
          name: action.payload
        }
      break;
    case "setAge":
        state = {
          ...state, //show state all
          age:action.payload
        }
      break;
  }
  return state;
}
// Reducer 2
const EmployeeReducer = (state=initialState,action)=>{
  switch (action.type) {
    case "ADD": //is Action
        state = {
          /*result : state.result ,
          value : state.value*/
          ...state, //show state all
          result: state.result += action.payload,
          value : [...state.value,action.payload]
        }
      break;
    case "SUBTRACT":
    state = {
      /*result : state.result ,
      value : state.value*/
      ...state, //show state all
      result: state.result -= action.payload,
      value : [...state.value,action.payload]
    }
      break;
  }
  return state;
}///
const store = createStore(combineReducers({EmployeeReducer , UserReducer}));

//subscribe
store.subscribe(()=>{
  console.log("Update Store",store.getState());
})
//change data in Store
store.dispatch({
  type: "ADD",
  payload : 10000
})
store.dispatch({
  type : "setName",
  payload: "DISPATCH"
});
store.dispatch({
  type : "setAge",
  payload : 30
})
/*store.dispatch({
  type: "ADD",
  payload : 14000
})
store.dispatch({
  type: "SUBTRACT",
  payload : 4000
})
*/
```


Resource ::
> **Getting Started with React, Redux and Immutable: a Test-Driven Tutorial (Part 1)**
- http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-1/
> **Getting Started with React, Redux and Immutable: a Test-Driven Tutorial (Part 2)**
- http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-2/
