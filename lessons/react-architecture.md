![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# React Architecture

## Command-line

`create-react-app` is a global command-line utility that you use to create new projects.

```sh
$ create-react-app my-react-application
$ cd my-react-application
```


## Folder structure

```
my-react-application/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


## Use one file per component

We recommand you to use one file per component.

```
src/
  App.css
  App.js
  App.test.js
  MyComponent1.css
  MyComponent1.js
  MyComponent1.test.js
  MyComponent2.css
  MyComponent2.js
  MyComponent2.test.js
  index.css               # Global CSS File
  index.js
  logo.svg
```

**Example**

```js
// src/App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
```

```js
// src/Header.js
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="Header-nav">Header</nav>
      </div>
    );
  }
}

export default Header;
```

```css
/* src/Header.css */
.Header {
  padding: 20px;
}
.Header-nav {
  color: chartreuse;
}
```


```js
// src/Main.js
import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
        <p className="Main-intro">
          To get started, edit <code>src/Main.js</code> and save to reload.
        </p>
    );
  }
}

export default Main;
```