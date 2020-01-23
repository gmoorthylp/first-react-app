import React, { Component, Fragment } from 'react';

import classes from './App.css';

import Person from './Persons/Person/Person';
import Aux from './hoc/Auxilary';
import WithClass from './hoc/WithClass';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import withClass from './hoc/withClassFun';
import withClassFun from './hoc/withClassFun';
import Persons from './Persons/Persons';
import Cockpit from './Cockpit/Cockpit';

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1x solid blue; 
//       padding: 8px;
//       cursor: pointer;

//       &:hover  {
//         background-color: ${props => props.alt ? 'blue' : 'grey'};
//         color: black;
//       }
//   `;

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');  
  }

  
  state = {
    personST: [
      {id: 'id1', name: 'Priya', age: '35'},
      {id: 'id2', name: 'Kaneeshka', age: 7},
      {id: 'id3', name: 'Kaari', age: 2},
    ],
    otherState: 'Kaneeshka - Kaari',
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDrivedStateFromProps()');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  switchNameHandler = (newName) => {
    // console.log('Button clicked!!');
    // DONT do this: this.state.personST[0].name ='Kaneeshka Gnanamoorthy';
    this.setState({personST: [
      {name: 'Priya', age: '35'},
      {name: 'Kaneeshka', age: '7'},
      {name: 'Kaari', age: '2.5'},
    ]})
  }

  nameChangeHandler = (event, id) => {
     console.log('Values clicked!!');
    // DONT do this: this.state.personST[0].name ='Kaneeshka Gnanamoorthy';
    const personIndex = Object.values(this.state.personST).findIndex(p => {
      return p.id === id;
    } );
    console.log('Person index -'+personIndex)
      
    const person = {
      ...this.state.personST[personIndex]
    };
    person.name = event.target.value;
    console.log('Person name -'+person.name)

    console.log('Array before - '+this.state.personST);
    const persons = {...this.state.personST};
    persons[personIndex] = person;
    console.log(person.name + ' '+person.age);
    console.log(persons);
    this.setState({personST: persons});

    console.log('Array after - '+this.state.personST[1].name);
  }

  togglePersonElements = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const personsArray = [...this.state.personST];
    console.log(personsArray);
    personsArray.splice(personIndex, 1);
    this.setState((prevState, props) => {
      return {
        personST: personsArray,
        changeCounter: prevState.changeCounter + 1
      }
    });      
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1x solid blue', 
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover':  {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let persons = null; 
   
    if(this.state.showPersons){
        
      persons = <Persons 
            persons={Object.values(this.state.personST)}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} 
            isAuthenticated={this.authenticated}/>;        
        
      
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
     
    }

    
    return (
      
      // <div className={classes.App}>
      // <WithClass classes={classes.App}>
      <Aux>
        <Cockpit showPersons={this.state.showPersons}
          persons={this.state.personST} 
          clicked={this.togglePersonElements}
          login={this.loginHandler}/>
        {persons}    
      </Aux>  
        // </WithClass>
      
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi ! Kaneeshka-Kaari!!!'));

  }
}

export default withClassFun(App, classes.App);
