import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Don't forget to update the end of the code
// To help you reading on VS Code, you can "Fold All" (Cmd+K Cmd+1)

// --------------- Introducing JSX / Rendering Elements / Components and Props ---------------
// Doc: https://reactjs.org/docs/hello-world.html
// Doc: https://reactjs.org/docs/introducing-jsx.html
// Doc: https://reactjs.org/docs/rendering-elements.html
// Doc: https://reactjs.org/docs/components-and-props.html

// Exercise A1
// Display a Bootstrap button "I love React"
// Doc: https://getbootstrap.com/docs/4.0/components/buttons/
class ExerciseA1 extends React.Component {
}

// Exercise A2
// Display three Bootstrap buttons: "I hate Angular", "I dislike Vue", "I love React"
class ExerciseA2 extends React.Component {
}

// Exercise A3
// Display: The best company is Ironhack
class ExerciseA3 extends React.Component {
  render() {
    let bestCompany = "Ironhack"; // Variable to display
    return;
  }
}

// Exercise A4
// Display: The best company is Ironhack
class ExerciseA4 extends React.Component {
  constructor(props) {
    super(props);
    this.bestCompany = "Ironhack"; // Variable to display
  }
}

// Exercise A5
// Display: The best student is ... (a random student)
class ExerciseA5 extends React.Component {
  constructor(props) {
    super(props);
    this.students = ["Antoine", "Charlotte", "David", "Julien", "Medhi", "Vivian"];
  }
}


// Exercise A6
// Display: The best student is ... and he/she works at ...
class ExerciseA6 extends React.Component {
  constructor(props) {
    super(props);
    this.students = [
      {
        name: "Antoine",
        gender: "male",
        company: "Orion"
      },
      {
        name: "Charlotte",
        gender: "female",
        company: "Ironhack"
      },
      {
        name: "David",
        gender: "male",
        company: "TextMaster"
      },
      {
        name: "Julien",
        gender: "male",
        company: "Cleep"
      },
      {
        name: "Medhi",
        gender: "male",
        company: "SLAP"
      },
      {
        name: "Vivian",
        gender: "male",
        company: "OuiFlash"
      },
    ];
  }
}

// Exercise A7
// Display: This year, Maxence is ...
class ExerciseA7 extends React.Component {
  constructor(props) {
    super(props);
    this.maxenceBirthYear = 1992;
  }
  getAge(birthYear) {
    return (new Date()).getFullYear() - birthYear;
  }
}

// Exercise A8
// Use the Muliplication component to display "6x7 = 42"
class ExerciseA8 extends React.Component {
}

class Muliplication extends React.Component {
  render() {
    return (
      <button className="btn btn-primary">{this.props.a} x {this.props.b} = {this.props.a * this.props.b}</button>
    )
  }
}

// Exercise A9
// Fix the TeacherCard component to display info about teachers
class ExerciseA9 extends React.Component {
  constructor(props) {
    super(props);
    this.marc = {
      name: "Marc Pomar",
      city: "Madrid",
      pictureUrl: "https://www.ironhack.com/assets/instructors/marc-pomar.jpg",
      description: "Passionate about education, Marc is a telecommunications engineer and has a Master's in computer vision. He founded his own company, Faable, a consultancy firm which has worked with top companies like Microsoft."
    }
  }
  render() {
    return (
      <div>
        <TeacherCard name="Edu San Martín" city="Paris" pictureUrl="https://www.ironhack.com/assets/instructors/edu-san-martin.jpg">Eduardo began learning computer science on his own while in high school, and he hasn't stopped learning since. He actively maintains an open source project called Vue and regularly gives talks at conferences and meetups as well as organizing his own in Paris.</TeacherCard>
        <TeacherCard name={this.marc.name} city={this.marc.city} pictureUrl={this.marc.pictureUrl}>{this.marc.description}</TeacherCard>
      </div>
    );
  }
}

class TeacherCard extends React.Component {
  render() {
    return (
      <div class="card" style={{width: "28rem", margin: 20}}>
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">(Name of the instructor)</h5>
          <p class="card-text">(Description of the instructor)</p>
          <a href="#" class="btn btn-primary">See (city of the instructor) campus</a>
        </div>
      </div>
    )
  }
}

// Exercise A10
// Transmit the city from "ExerciseA10" to "ExerciseA10Warning"
class ExerciseA10 extends React.Component {
  constructor(props) {
    super(props);
    this.city = "Paris";
  }
  render() {
    return (
      <div className="bg-dark text-white p-4">
        <h1>ExerciseA10</h1>
        <ExerciseA10Primary />
      </div>
    )
  }
}

class ExerciseA10Primary extends React.Component {
  render() {
    return (
      <div className="bg-primary p-4">
        <h2>ExerciseA10Primary</h2>
        <ExerciseA10Success />
      </div>
    )
  }
}

class ExerciseA10Success extends React.Component {
  render() {
    return (
      <div className="bg-success p-4">
        <h3>ExerciseA10Success</h3>
        <ExerciseA10Danger />
      </div>
    )
  }
}

class ExerciseA10Danger extends React.Component {
  render() {
    return (
      <div className="bg-danger p-4">
        <h4>ExerciseA10Danger</h4>
        <ExerciseA10Warning />
      </div>
    )
  }
}

class ExerciseA10Warning extends React.Component {
  render() {
    return (
      <div className="bg-warning p-4">
        <h5>ExerciseA10Warning</h5>
        The city of "ExerciseA10" is: ...
      </div>
    )
  }
}

// --------------- State and Lifecycle ---------------
// Doc: https://reactjs.org/docs/state-and-lifecycle.html

// Exercise B1
// Display a button with a number (0 at the begining) and every time you click on it incrmets its value 
class ExerciseB1 extends React.Component {
}

// Exercise B2
// Display a number, that can be incremented by 1, 10 or multiple by 2 when you click on one of the 3 buttons
class ExerciseB2 extends React.Component {
  render() {
    return (
      <div className="m-3">
        My number: 0
        <br/><br/>
        <button className="btn-success mr-3">+1</button>
        <button className="btn-success mr-3">+10</button>
        <button className="btn-success mr-3">x2</button>
      </div>
    )
  }
}

// Exercise B3
// Create a little game: the user can click on buttons to change a binary number. It changes the decimal number and when the user reached it, it displays "You win!"
class ExerciseB3 extends React.Component {
  constructor(props) {
    super(props);
    this.randomNumber = Math.floor(16*Math.random());
  }
  render() {
    return (
      <div className="m-3">
        Binary number: 
        <button className="btn-success ml-1">1</button>
        <button className="btn-success ml-1">0</button>
        <button className="btn-success ml-1">0</button>
        <button className="btn-success ml-1">0</button>
        <br/><br/>
        Decimal number: 8
        <br/>
        Goal: {this.randomNumber}
        <br/><br/>
        Keep working / You win!
      </div>
    )
  }
}

ReactDOM.render(
  <ExerciseB3 />,
  document.getElementById('root')
);
