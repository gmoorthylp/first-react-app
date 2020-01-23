import React, {useEffect, useRef} from 'react';

import classes from './Cockpit.css';



const cockpit = (props) => {

    const taggleBtnRef = React.useRef(null);

    useEffect(() => {
        console.log('Inside use effect !!!');
        taggleBtnRef.current.click();
        return () => {
            console.log('Cleanup!!!');
        };   
    }, []);

    let btnClass = '';   
    if(props.showPersons) { 
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Hi! Kaneeshka - Kaari</h1>
            <p className={assignedClasses.join(' ')}>They are really naughty!!</p>
            <button className={btnClass}
            alt={props.showPersons}         
            onClick={props.clicked}
            ref={taggleBtnRef}> Toggle Persons </button>
            <button onClick={props.login}>Login</button>
         </div>
    );
};

export default React.memo(cockpit);
