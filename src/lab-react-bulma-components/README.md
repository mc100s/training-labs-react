![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# Bulma Components

## Introduction

Do you know [Bulma](https://bulma.io), a very nice alternative to Bootstrap as a CSS framework? We are going to create a diary application with Bulma and React!


You can find the starter code in the starter code folder of this Github repo.


## Installation 

### Setup a basic project
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

### Bulma installation
```
$ npm install --save bulma
```

```javascript
import 'bulma/css/bulma.css';
```


## Instructions

### Iteration 1 | Button Component

The goal is to create a component called `Button` that creates a `<button>` with the nice Bulma classes.

You will find the Bulma buttons documentation here: https://bulma.io/documentation/elements/button/

```html
<!-- JSX version -->
<Button isSmall isDanger className="is-rounded my-class">Button 1</Button>
<Button isSmall isSuccess>Button 2</Button>
<!-- What is rendered in the DOM -->
<button class="button is-rounded my-class is-danger is-small">Button 1</button>
<button class="button is-small is-success">Button 2</button>
```

What is visually rendered

![](https://i.imgur.com/qrfQG18.png)

 
Focus on the following classes: `is-primary`, `is-success`, `is-danger`, `is-small` and `is-medium`. 

If you need any help, you can have a look how to take the content between an opening tag and a closing tag: [Children in JSX](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

#### Bonus

If you want, you can do all the cases by using the following object:

```javascript
{
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
}
```




### Iteration 2 | Message Component

Now, we are going to create `Message` component. You can find the documentation on Bulma's website: https://bulma.io/documentation/components/message/

```html
<!-- JSX version -->
<Message isInfo title="Hello World">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
```

What is visually rendered

![](https://i.imgur.com/qmD2Nkb.png)

#### Bonus

When you click on the delete button in the top right corner, hide the message. For that, you will need to use a state in the `Message` component.


### Iteration 3 | Display all messages

Now the idea is to create a `Diary` component that will display many message.

First, add the following variable in your code:
```javascript
let dairyMessages = [
  {
    date: new Date("2018-01-01"),
    text: "I slept a lot after the New Year eve and I visited Madrid in the afternoon",
    moodLevel: 3
  },
  {
    date: new Date("2018-01-02"),
    text: "Last day at Madrid, we've decided to play basketball with other Spanish guys",
    moodLevel: 2
  },
  {
    date: new Date("2018-01-03"),
    text: "Let's back to work in Paris. It was hard but good!",
    moodLevel: 1
  },
  {
    date: new Date("2018-01-04"),
    text: "I've meet a very nice person at friend's dinner and we are going to meet again next week :)",
    moodLevel: 3
  }
]
```

Then, you will need to create your `Diary` component that will render:
- All elements from `dairyMessages`:
  - Title: the `date`
  - Content: the `text`
  - The style: based on `moodLevel`
- Optional: A button to add a random diary message
- Optional: A button to remove a diary message

At the end, it should look like this:

![](https://i.imgur.com/BKL96fh.png)


### Iteration 4 | Ask your teacher ;)


