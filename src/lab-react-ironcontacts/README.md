![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# IronContacts

## Introduction

After Ironhack, you have decided to work in the movie industry and you've found a job where you need to manage the contacts of a famous producer.

We are going to create contact management app with React for this producer.

You can find the starter code in the starter code folder of this Github repo.

## Installation 

### Setup a basic project
Commands to launch
```sh
$ npm install -g create-react-app # Install globally the `create-react-app` command
$ create-react-app my-app # Create a React project folder "my-app"
$ cd my-app
$ rm -f src/*
$ touch src/index.js src/index.css # Create 2 files
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

### Import a JSON

Go to the following page and save it as `src/contacts.json`: https://raw.githubusercontent.com/mc100s/training-labs-react/master/src/lab-react-ironcontacts/contacts.json

Then, inside your `src/index.js`, add the following line at the top of your file. It will define a `contacts` variable that contains the array with all values from the imported file.
```js
import contacts from './contacts.json'
```


## Instructions

### Iteration 1 | Display 5 Contacts

Let's take a look at the starter code.

There is a JSON file with the producer contacts, named `contacts.json`. Import it and display only the 5 first contacts in a `<table>` and display the `picture`, `name`, and `popularity` of each contact.

At the end of this iteration, your application should look like this:

![Screenshot](https://i.imgur.com/fPuwZXv.png)


### Iteration 2 | Add New Random Contacts

In your application, create a "*Add Random Contact*, so that every time you click on this button, it adds a new random actor. 

At the end of this iteration, your website will probably look like this:

![Screenshot](https://i.imgur.com/GuNyYiU.png)


### Iteration 3 | Sort Contacts By Name And Popularity

The producer asked you to add two new buttons to help him sorting his contacts. Create them so that when you click on it, it sorts the table on the `name` or `popularity` field.

This is what you may have at the end of this iteration:

![Screenshot](https://i.imgur.com/vUDGZ7Y.png)


### Iteration 4 | Sort Contacts By Name And Popularity

The producer also would like to have the opportunity to remove some of its contacts. Implement a "*Delete*" button on each row of your `<table>` that will let the user remove some contacts.

At the end of this iteration, your web page may look like this after playing a little bit with the "*Delete*" buttons.

![Screenshot](https://i.imgur.com/N3K1K1k.png)


### Iteration 5 | Styling

Unfortunately, this contacts list isn't really production ready. So make it fancy!



## Hints

Have a look at hints only if you are stuck for several minutes. All the code is encoded in Base64 and can be decoded here: https://www.base64decode.org/

### Iteration 1 | Display 5 Contacts

You can import the JSON file by writing this:
```
aW1wb3J0IGNvbnRhY3RzIGZyb20gJy4vY29udGFjdHMuanNvbic=
```


To display the first 5 contacts, first you can set a `contacts` state that will contain the list of all displayed contacts. Then you will need to loop on the variable `this.state.contacts` with a specific function

```
Y2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsNCiAgY29uc3RydWN0b3IocHJvcHMpIHsNCiAgICBzdXBlcihwcm9wcyk7DQogICAgdGhpcy5zdGF0ZSA9IHsNCiAgICAgIGNvbnRhY3RzOiBjb250YWN0cy5zbGljZSgwLDUpDQogICAgfQ0KICB9DQogIA0KICBkaXNwbGF5Q29udGFjdHMoKSB7DQogICAgbGV0IHJlc3VsdCA9IFtdOw0KICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jb250YWN0cy5sZW5ndGg7IGkrKykgew0KICAgICAgcmVzdWx0LnB1c2goDQogICAgICAgIDxDb250YWN0Um93DQogICAgICAgICAga2V5PXtpfSANCiAgICAgICAgICBjb250YWN0PXt0aGlzLnN0YXRlLmNvbnRhY3RzW2ldfSANCiAgICAgICAgLz4NCiAgICAgICkNCiAgICB9DQogICAgcmV0dXJuIHJlc3VsdDsNCiAgfQ0KDQogIHJlbmRlcigpIHsNCiAgICByZXR1cm4gKA0KICAgICAgPGRpdj4NCiAgICAgICAgPCEtLSAuLi4gLS0+DQogICAgICAgICAge3RoaXMuZGlzcGxheUNvbnRhY3RzKCl9DQogICAgICAgIDwhLS0gLi4uIC0tPg0KICAgICAgPC9kaXY+DQogICAgKTsNCiAgfQ0KfQ0KDQovLyBEb24ndCBmb3JnZXQgdG8gY3JlYXRlIGEgIkNvbnRhY3RSb3ciIGNvbXBvbmVudA==
```

### Iteration 2 | Add New Random Contacts

For this iteration, you will need to create a function (`addRandomContact`) that will update the state (with the method `this.setState`). If you are courageous you can create a `AddRandomContactButton` component, but it's not really mandatory in this case.

```js
class AddRandomContactButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Add Random Contact</button>
    );
  }
}

class App extends React.Component {
  // ...

  addRandomContact() {
    let newContacts = this.state.contacts.slice();
    newContacts.push(contacts[Math.floor(Math.random()*contacts.length)])
    this.setState({
      contacts: newContacts
    })
  }

  render() {
    return (
        {/* ... */}
        {/* Without a Component */}
        <button onClick={() => {this.addRandomContact()}}>Add Random Contact</button>
        {/* OR with a Component */}
        <AddRandomContactButton onClick={() => {this.addRandomContact()}} />
        {/* ... */}
    );
  }
}
```