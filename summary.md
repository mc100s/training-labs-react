![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# React Summary

## Start the project

### With Codepen

https://codepen.io/gaearon/pen/oWWQNa?editors=0010

### With your code editor

Commands to launch
```sh
$ npm install -g create-react-app # Install globally the `create-react-app` command
$ create-react-app my-app # Create a React project folder "my-app"
$ cd my-app
$ rm -f src/*
$ touch index.js index.css # Create 2 files
```

Your `src/index.js` file
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Your application code */}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

## React Components

React is based on Components, and each Component is a classe that `extends React.Component`.

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
// Example usage: <ShoppingList name="Mark" />
```

## React Props

```javascript
// To use in JSX
<MyComponent myProp={myValue} />

// To use inside MyComponent class
this.prop.myProp
```

**Example**
```javascript
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />; // Pass a "value" prop to the Square 
  }
  // ...
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value} {/* Reuse the "value" prop */}
      </button>
    );
  }
}
```

## React States


```javascript
// You can initialize the state in the Component's constructor
this.state = { firstname: 'Maxence', age: 25 }

// You can get a state value with "this.state" property
this.state.firstname

// You MUST set some state value with "this.setState" method
// Be careful, this opereation is asynchronous
this.setState({firstname: 'Mickaël'})
```

**Example**

```javascript
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // Init the state
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}> {/* Set the state */}
        {this.state.value} {/* Get the state */}
      </button>
    );
  }
}
```

### React Functional Components

Component that only need a `render` method can be simplified by a function that just returns a JSX.

**Example**

```javascript
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```
