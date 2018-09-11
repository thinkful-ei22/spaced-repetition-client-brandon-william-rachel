import React from 'react';
import {connect} from 'react-redux';

import './styles/app.css';
export function UserInput(props){



  return (
    <section className="answer">
    
    <label>{props.answerLabel} <br /> </label>
    <input placeholder="Enter guess here" />
    <button onClick={e=> props.onClick(e)}>Submit</button>
    </section>
  );
}

const mapStateToProps = state => ({
answerLabel: state.answerLabel = 'Answer'
});

export default connect (mapStateToProps)(UserInput);