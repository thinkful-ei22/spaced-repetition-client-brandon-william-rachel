import React from 'react';
import {connect} from 'react-redux';

import './styles/app.css';
import { handleSubmit } from '../actions/scoring';
export class UserInput extends React.Component {
 
render(){
  console.log(this.state);
  return (
    <section className="answer">
    
    <label className={this.props.labelColor}>{this.props.answerLabel} <br /> </label>
    <input placeholder="Enter guess here" ref="userInput" />
    <button onClick={()=> this.props.dispatch(handleSubmit(this.refs.userInput.value))}>Submit</button>
    </section>
  );
}
}

export default connect()(UserInput);