import React from 'react';
import Person from './Person/Person';
import { ProgressPlugin } from 'webpack';

const persons = props => props.persons.map((person, index) => {
    console.log(person.name);
        return <Person 
          name={person.name} 
          age={person.age}
          click={() => props.clicked(index)}          
          changed={(event) => props.changed(event, person.id)}
          isAuth={props.isAuthenticated}
          />
    }
);

export default persons;