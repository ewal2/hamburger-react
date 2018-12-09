import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: "Ewa", age: "32"},
            { name: "Aga", age: "25"},
            { name: "Batu", age: "55"},
            { name: "Miro", age: "20"}
        ],
        otherState: "some other value"
    }
    
  switchNameHandler = () => {
        //console.log("Was clicked!");
        // Don´t do this this.state.persons[0].name = "Ula";
        this.setState({
            persons:[
                { name: "Ewelina", age: "18"},
                { name: "Udo", age: "25"},
                { name: "Bartosz", age: "55"},
                { name: "Miro", age: "20"}
        ]
        });
    }
    
  render() {
    return (
      <div className="App">
       <h1>Hi, I am a React App</h1>
       <p>This is really working!</p>
       <button onClick = {this.switchNameHandler} >Switch Name</button>
       <Person 
         name = {this.state.persons[0].name} 
         age = {this.state.persons[0].age}/>
       <Person 
         name = {this.state.persons[1].name} 
         age = {this.state.persons[1].age}
         click={this.switchNameHandler} >My Hobbies: Real estate</Person>
       <Person 
         name = {this.state.persons[2].name} 
         age = {this.state.persons[2].age}/>
       <Person 
         name = {this.state.persons[3].name} 
         age = {this.state.persons[3].age}/>
      </div>

    );
  // return React.createElement("div", {className:"App"}, React.createElement("h1", null,  "Hi, I am a React App!" ));
  }
}

export default App;
