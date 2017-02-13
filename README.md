
Start React

1. Intro React

install react-app

```
$ npm install create-react-app -g
$ npm install create-react-app --save
```

create project

```
$ create react-app hello-react
```

And Then Start project
```
$ cd hello-react
$ npm start
```


2. JSX Syntax

```
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

3. Style and Expression JSX

```
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

4. Create Component
