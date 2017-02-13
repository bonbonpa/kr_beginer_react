![raect](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSithoqiOTODZ73obUF3Nj5bDueB4HG9PMUNQDVV9ROcKlijncE)

# Start React

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
