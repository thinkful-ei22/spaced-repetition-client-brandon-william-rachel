import React from 'react';
//import Answer from './answer'; ??

export default function Feedback(props) {

  const userGuess = props.answer;
  const key = props.correctAnswer

  let correctFeedback;
  let incorrectFeedback;


  if (userGuess === props.correctAnswer) {
    correctFeedback = <span>You're correct</span>;
  }
  else if (userGuess !== props.correctAnswer) {
    incorrectFeedback = <span>You're incorrect</span>;
  }
  return (
    <h2 key={key}>
    {props.feedback} {correctFeedback} {incorrectFeedback}
    </h2>

  );
};