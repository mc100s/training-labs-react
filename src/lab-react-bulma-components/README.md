![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# Bulma Components

## Introduction

Do you know [Bulma](https://bulma.io), a very nice alternative to Bootstrap as a CSS framework? We are going to create a landing page with Bulma and React!


You can find the starter code in the starter code folder of this Github repo.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- You must submit the entire React app

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Instructions

### Iteration 1 | Buttons

The goal is to create a component called `Button` that creates a `<button>` with the nice Bulma classes.

You will find the Bulma buttons documentation here: https://bulma.io/documentation/elements/button/

```html
<!-- JSX version -->
<Button isSmall isDanger className="is-rounded my-class">Button 1</Button>
<Button isSmall isSuccess>Button 2</Button>
<!-- What is rendered -->
<button class="button is-rounded my-class is-danger is-small">Button 1</button>
<button class="button is-small is-success">Button 2</button>
```

![](https://i.imgur.com/qrfQG18.png)

 
Focus on the following classes: `is-primary`, `is-success`, `is-danger`, `is-small` and `is-medium`. 

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

If you r


To help you:
- How to take the content between an opening tag and a closing tag: [Children in JSX](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)



### Iteration 2 | Message (or Card or Menu)

### Iteration 3 | Create a landing page



## Notes

### Bulma installation
```
$ npm install --save bulma
```

```javascript
import 'bulma/css/bulma.css';
```


