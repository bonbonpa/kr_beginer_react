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
