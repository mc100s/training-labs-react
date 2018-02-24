import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

function fahrenheitToCelsius(value){
  return (parseFloat(value) - 32) * 5 / 9
}

function celciusToFahrenheit(value){
  return (parseFloat(value) * 9 / 5)  + 32
}

class Calculator extends React.Component {
  displayMatter(){
    let valueInCelcius = this.props.unit === "C" ? this.props.value : fahrenheitToCelsius(this.props.value);
    console.log(valueInCelcius)
    if(!this.props.value){
      return "please put a value";
    } 
    else if(0<valueInCelcius && valueInCelcius<100){
      return "Liquid";
    }
    else if (0>=valueInCelcius) {
      return "Solid";
    }
    else {
      return "Gaz";
    }
  }

  render() {
    return(
      <div className="mb-3">
        Temp in {this.props.unit}  <input type="number" 
        value={this.props.value} 
        onChange={(e)=> {this.props.onChange(e)}} />
        {this.displayMatter()}
      </div>
    )
  }

}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valueInC: 42,
      valueInF: celciusToFahrenheit(42)
    }
  }

  handleChange(e, unit) {
    if (unit === "C") {
      this.setState({
        valueInC: e.target.value,
        valueInF: celciusToFahrenheit(e.target.value)
      })
    }
    else {
      this.setState({
        valueInC: fahrenheitToCelsius(e.target.value),
        valueInF: e.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Calculators</h1> 
        <Calculator unit="C" value={this.state.valueInC} 
          onChange={(e) => {this.handleChange(e, "C")}} />
        <Calculator 
          unit="F" 
          value={this.state.valueInF}
          onChange={(e) => this.handleChange(e, "F")}
         />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
