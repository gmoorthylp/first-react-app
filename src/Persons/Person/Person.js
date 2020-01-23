import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classes from './Person.css';
import classWithFun from '../../hoc/withClassFun';
import Aux from './../../hoc/Auxilary'

// const StyledDiv = styled.div`
//         width: 60%;
//         margin: 16px auto;
//         border: 1px solid #eee;
//         box-shadow: 0 2px 3px #ccc;
//         padding: 16px;
//         text-align: center;

//         @media (min-width: 500pm){
//             width: 450px;
//         }
// `;

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {

    console.log('Person.JS is rendering');

// const style = {
//     '@media (min-width: 500pm)': {
//         width: '450px'
//     }
// }

// const rnd = Math.random();

// if (rnd > 0.7){
//     throw new Error('Something went wrong!!'); 
// }
return (
        // <div className="Person" style={style}>
        //<div className={classes.Person}>
        <Aux>
           {this.props.isAuth ? <p>Authenticated !!</p> : <p>Please login..</p>}
            <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.changed} value={this.props.name}
                // ref={inputEl => {this.inputElement = inputEl}}
                ref={this.inputElementRef}/>
        </Aux>
    );
}
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default classWithFun(Person, classes.Person);