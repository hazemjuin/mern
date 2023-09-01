import React, { Component } from 'react';
import classes from './MyNewComponent.module.css';

class PersonComponent extends Component{
    render(){
        return(
            // <div>
            //     {this.props.someText}
            // </div>

            <div className={classes.card}>
                <div className={classes.content}>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.props.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button onClick={() => console.log("Button Clicked ✅✅✅")}>click </button>
                </div>
            </div>
        );

    }
}

export default PersonComponent;