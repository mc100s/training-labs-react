import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';


class Message extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.state = {
      display: 'block'
    };
  }
  
  handleDeleteClick() {
    this.setState({
      display: 'none'
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
      <article className={this.getClassName()} style={{display: this.state.display}}>
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
      <button className={this.getClassName()} onClick={this.props.onClick}>{this.props.children}</button>
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
    this.state = {
      dairyMessages: dairyMessages
    }
  }
  
  getAllMessages() {
    let res = [];
    for (let i = 0; i < this.state.dairyMessages.length; i++) {
      let className;
      switch (this.state.dairyMessages[i].moodLevel) {
        case 1:
          className = "is-danger"
          break;
        case 2:
          className = "is-info"
          break;
        case 3:
          className = "is-success"
          break;
      }
      res.push(
        <Message key={i} className={className} title={this.state.dairyMessages[i].date.toDateString()}>
          {this.state.dairyMessages[i].text}
        </Message>
      )
    }
    return res;
  }
  
  handleRandomClick() {
    let dairyMessages = this.state.dairyMessages.slice()
    var d = new Date(dairyMessages[dairyMessages.length-1].date.valueOf());
    d.setDate(d.getDate() + 1);
    dairyMessages.push({
      date: d,
      text: "Lorem ipsum dolor sit amet",
      moodLevel: Math.floor(Math.random()*3)+1
    })

    this.setState({
      dairyMessages
    })
  }

  handleRemoveClick() {
    let dairyMessages = this.state.dairyMessages.slice()
    dairyMessages.shift();
    this.setState({
      dairyMessages
    })
  }

  render() {
    return (
      <div>
        {this.getAllMessages()}
        <Button onClick={() => this.handleRandomClick()}>Add one random diary message</Button>
        <br />
        <br />
        <Button onClick={() => this.handleRemoveClick()}>Remove the first diary message</Button>
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
      <div className="container">
        <h1 className="title">My diary</h1>
        <Dairy />
      
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


