import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';

// import './index.css';

// class AddRandomContactButton extends React.Component {
//   render() {
//     return (
//       <button onClick={this.props.onClick}>Add Random Contact</button>
//     );
//   }
// }

// class SortButton extends React.Component {
//   render() {
//     return (
//       <button onClick={() => {this.props.onClick(this.props.field)}}>Sort by {this.props.field}</button>
//     );
//   }
// }

// class ContactRow extends React.Component {
//   render() {
//     return (
//       <tr>
//         <td><img src={this.props.contact.pictureUrl} alt="Picture" /></td>
//         <td>{this.props.contact.name}</td>
//         <td>{this.props.contact.popularity.toFixed(2)}</td>
//         <td><button onClick={this.props.onClickDelete}>Delete</button></td>
//       </tr>
//     );
//   }
// }

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.state = {
      visibility: 'visible'
    };
  }
  
  handleDeleteClick() {
    this.setState({
      visibility: 'hidden'
    })
  }
  
  displayMessageHeader() {
    if (!this.props.title)
    return;
    return (
      <div className="message-header">
      <p>{this.props.title}</p>
      <button className="delete" aria-label="delete" onClick={this.handleDeleteClick}></button>
      </div>
    );
  }
  
  getClassName() {
    var res = "message"
    if (this.props.className)
    res += ' ' + this.props.className;
    let correspondances = {
      isDark: 'is-dark',
      isPrimary: 'is-primary',
      isLink: 'is-link',
      isInfo: 'is-info',
      isSuccess: 'is-success',
      isWarning: 'is-warning',
      isDanger: 'is-danger',
      isSmall: 'is-small',
      isMedium: 'is-medium',
      isLarge: 'is-large',
    };
    for (const key in correspondances) {
      if (this.props[key]) {
        res += ' ' + correspondances[key];
      }
    }
    return res;
  }
  
  render() {
    return (
      <article className={this.getClassName()} style={{visibility: this.state.visibility}}>
      {this.displayMessageHeader()}
      <div className="message-body">
      {this.props.children}
      </div>
      </article>
    )
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log("DEBUG props", props);
  }
  
  getClassName() {
    let res = 'button';
    if (this.props.className)
    res += ' ' + this.props.className;
    let correspondances = {
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
    };
    for (const key in correspondances) {
      if (this.props[key]) {
        res += ' ' + correspondances[key];
      }
    }
    return res;
  }
  
  render() {
    return (
      <button className={this.getClassName()}>{this.props.children}</button>
    )
  }
}

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

class Dairy extends React.Component {
  constructor(props) {
    super(props);
    console.log("DEBUG props", props);
  }
  
  getAllMessages() {
    let res = [];
    for (let i = 0; i < dairyMessages.length; i++) {
      switch (dairyMessages[i].moodLevel) {
        case 1:
          res.push(
            <Message key={i} isDanger title={dairyMessages[i].date.toDateString()}>
              {dairyMessages[i].text}
            </Message>
          )
          break;
        case 2:
          res.push(
            <Message key={i} isInfo title={dairyMessages[i].date.toDateString()}>
              {dairyMessages[i].text}
            </Message>
          )
          break;
        case 3:
          res.push(
            <Message key={i} isSuccess title={dairyMessages[i].date.toDateString()}>
              {dairyMessages[i].text}
            </Message>
          )
          break;
      }
    }
    return res;
  }
  
  render() {
    return (
      <div>
        {this.getAllMessages()}
        <Button>Add one random diary message</Button>
        <br />
        <br />
        <Button>Remove the first diary message</Button>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
      <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div id="about" class="content">
            <p id="alternative">
              <a href="https://bulma.io/alternative-to-bootstrap/">An alternative to <strong>Bootstrap</strong></a>
            </p>
          </div>
        </div>
      <div class="column is-4">
      <div id="share" class="content">
      <div>
      <strong>Support</strong> and share the love!
      </div>
      <div id="social">
      <a class="bd-patreon-button" href="https://www.patreon.com/jgthms" target="_blank">
      <img src="/images/patreon.png" alt="Become a patron" />
      </a>
      </div>
      
      <div class="column is-4">
      <div id="sister">
      <p>
      More <strong>helpful</strong> tools:
      </p>
      <ul>
      <li>
      <a href="http://cssreference.io">
      <img src="https://bulma.io/images/css-reference-logo.png" alt="CSS Reference logo" />
      </a>
      </li>
      <li>
      <a href="http://htmlreference.io">
      <img src="https://bulma.io/images/html-reference-logo.png" alt="HTML Reference logo" />
      </a>
      </li>
      </ul>
      </div>
      </div>
      </div>
      
      <div id="tsp">
      <p>
      <a href="https://bulma.io/made-with-bulma/">
      <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
      </a>
      <small>
      Get the <a href="https://bulma.io/made-with-bulma/">badge</a>!
      <br/>
      Source code licensed <a href="https://opensource.org/licenses/mit-license.php">MIT</a>.
      <br/>
      Website content licensed <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.
      </small>
      </p>
      </div>
      </div>
      </div>
      </div>
      </footer>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={{margin: 20}}>
      {/* <Button isSmall isDanger className="is-rounded ironhack">Button 1</Button> */}
      {/* <Button isSmall isSuccess>Button 2</Button> */}
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>

      <Dairy />
      {/* <Footer /> */}
      
      {/* 
        <Menu />
        <StudentCardList />
        <ApplyForm />
        <Footer />
      */}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


