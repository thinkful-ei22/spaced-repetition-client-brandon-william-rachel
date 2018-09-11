import React from 'react';
import {connect} from 'react-redux';

import './styles/app.css';
export function Answer(props){



  return (
    <section className="answer">
    
    <label>{props.answerLabel} <br /> </label>
    <input placeholder="Enter guess here" />
    </section>
  );
}

const mapStateToProps = state => ({
answerLabel: state.answerLabel = 'Answer'
});

export default connect (mapStateToProps)(Answer);