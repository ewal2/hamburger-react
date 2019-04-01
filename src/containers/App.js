import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';


class App extends Component {
    state = {
        persons: [
            { id: "a123", name: "Ewa", age: "32"},
            { id: "b123", name: "Aga", age: "25"},
            { id: "c123", name: "Batu", age: "55"},
            { id: "d123", name: "Miro", age: "20"}
        ],
        //otherState: "some other value",
        showPersons: false
        
    }
    
  //switchNameHandler = (newName) => {
//        this.setState({
//            persons:[
//               { name: newName, age: "32"},
//                { name: "Aga", age: "25"},
//                { name: "Bartosz", age: "55"},
//                { name: "Miro", age: "20"}
//        ]
//        });
//    }
    
    nameChangedHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        
        const person = {
            ...this.state.persons[personIndex]
        };
        
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        
        persons[personIndex] = person;
        
        this.setState( {persons: persons} );
    }
    
    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    
   
    
  render() {
      // const style = {
      //     backgroundColor: "green",
      //     color: "white",
      //     font: "inherit",
      //     border: "1px solid blue",
      //     padding: "8px",
      //     cursor: "pointer",
      // };
      
    let persons = null;
    let btnClass = "";
    
    if ( this.state.showPersons ) {
        persons = (
           <div>
           {this.state.persons.map((person, index) => {
               return <Person 
               click={() => this.deletePersonHandler(index)}
               name={person.name} 
               age={person.age}
               key={person.id}
               changed={(event) => this.nameChangedHandler(event, person.id)} />
           })}
             
            </div>
        );
        btnClass = classes.Red;
        //style.backgroundColor = "red";
    }
    
    const assignedClasses = [];
    
    if (this.state.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ["red", "bold"]
    }
      
    return (
          <div className={classes.App}>
               <h1>Hi, I am a React App</h1>
               <p className={assignedClasses.join(" ")}>This is really working!</p>
               <button 
                 className={btnClass}
                 // style={style}  
                 onClick = {this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
          </div>
    );
  }
}

export default App;
