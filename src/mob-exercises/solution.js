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
  render() {
    return (
      <button className="btn btn-primary">I love React!</button>
    )
  }
}

// Exercise A2
// Display three Bootstrap buttons: "I hate Angular", "I dislike Vue", "I love React"
class ExerciseA2 extends React.Component {
  render () {
    return (
      <div>
        <button className="btn btn-secondary">I hate Angular</button>
        <button className="btn btn-secondary">I dislike Vue</button>
        <button className="btn btn-secondary">I love React</button>
      </div>
    )
  } 
}

// Exercise A3
// Display: The best company is Ironhack
class ExerciseA3 extends React.Component {
  render() {
    let bestCompany = "Ironhack"; // Variable to display
    return (
      <div>
       The best company is {bestCompany}
      </div>
    )
  }
}

// Exercise A4
// Display: The best company is Ironhack
class ExerciseA4 extends React.Component {
  constructor(props) {
    super(props);
    this.bestCompany = "Ironhack"; // Variable to display
  } render ()
    {
      return (
        <div>
          The best company is {this.bestCompany}
        </div>
      )
     }
}

// Exercise A5
// Display: The best student is ... (a random student)
class ExerciseA5 extends React.Component {
  constructor(props) {
    super(props);
    this.students = ["Antoine", "Charlotte", "David", "Julien", "Medhi", "Vivian"];
  }

  randomStudent () {
    return this.students[Math.floor(Math.random()* this.students.length)];
  }

  render () {
    return (
      <div>
        The best student is {this.randomStudent()}
      </div>
    )
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
    this.randomStudent =this.students[Math.floor(Math.random()* this.students.length)]
  }

  render () {
    return (
      <div>
        The best student is {this.randomStudent.name} and {this.randomStudent.gender === "male" ? "he" : 'she'} works at {this.randomStudent.company }
      </div>
    )
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
  render () {
    return (
      <div>This year, Maxence is {this.getAge(this.maxenceBirthYear)}
        </div>
    )
  }
}

// Exercise A8
// Use the Muliplication component to display "6x7 = 42"
class ExerciseA8 extends React.Component {
  render() {
    return (
      <Multiplication a ={6} b = {7}/>
    )
  }
}

class Multiplication extends React.Component {
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
      <div className="card" style={{width: "28rem", margin: 20}}>
        <img className="card-img-top" src={this.props.pictureUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.children}</p>
          <a href="#" className="btn btn-primary">See {this.props.city} campus</a>
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
        <ExerciseA10Primary city={this.city}/>
      </div>
    )
  }
}

class ExerciseA10Primary extends React.Component {
  render() {
    return (
      <div className="bg-primary p-4">
        <h2>ExerciseA10Primary</h2>
        <ExerciseA10Success city={this.props.city}/>
      </div>
    )
  }
}

class ExerciseA10Success extends React.Component {
  render() {
    return (
      <div className="bg-success p-4">
        <h3>ExerciseA10Success</h3>
        <ExerciseA10Danger city={this.props.city}/>
      </div>
    )
  }
}

class ExerciseA10Danger extends React.Component {
  render() {
    return (
      <div className="bg-danger p-4">
        <h4>ExerciseA10Danger</h4>
        <ExerciseA10Warning city={this.props.city}/>
      </div>
    )
  }
}

class ExerciseA10Warning extends React.Component {
  render() {
    return (
      <div className="bg-warning p-4">
        <h5>ExerciseA10Warning</h5>
        The city of "ExerciseA10" is: {this.props.city}
      </div>
    )
  }
}

// --------------- State and Lifecycle ---------------
// Doc: https://reactjs.org/docs/state-and-lifecycle.html

class ExerciseB1 extends React.Component {
}

ReactDOM.render(
  <ExerciseA10 />,
  document.getElementById('root')
);
