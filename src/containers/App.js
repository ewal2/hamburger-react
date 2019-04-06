import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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

    if ( this.state.showPersons ) {
        persons = <Persons 
                 persons={this.state.persons}
                 clicked={this.deletePersonHandler}
                 changed={this.nameChangedHandler} />;
    }
    
    
      
    return (
          <div className={classes.App}>
              <Cockpit 
                showPersons={this.state.showPersons}
                persons={this.state.persons}/>
              {persons}
          </div>
    );
  }
}

export default App;
