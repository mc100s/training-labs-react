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

class App extends React.Component {
  render() {
    return (
      <div style={{margin: 20}}>
        <Button isSmall isDanger className="is-rounded ironhack">Button 1</Button>
        <Button isSmall isSuccess>Button 2</Button>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </Message>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


