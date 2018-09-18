import React from 'react';
import { connect } from 'react-redux';
import { fetchNextQuestion } from '../actions/questions-next';
import './styles/dashboard.css';
export class UserInput extends React.Component {
constructor(props){
  super(props);
  this.state={
    answerLabel: 'Answer',
    labelColor: 'black',
    nextClass: 'hidden'
  }
}

handleUserInput(userInput){
  if (userInput !== ''){
if (userInput.toLowerCase() === this.props.currentQuestion.answer.toLowerCase()){
  this.setState({
      thisQuestionCorrect: true,
      answerLabel: 'Correct!',
      labelColor: 'green',
  }, function(){   
    console.log(this.state, 'userInput state');
      this.nextQuestion();
      this.render();
  });
}
else {
  this.setState({
      thisQuestionCorrect: false,
      answerLabel: 'Incorrect. The answer is "' + this.props.currentQuestion.answer+'"',
      labelColor: 'red',
  }, function(){
      this.nextQuestion();
  });
}
}
}
nextQuestion(){
  const headers = {
    'Authorization': 'Bearer ' + this.props.authToken,
    'Content-Type' : 'application/json'
  };
console.log(this.state.thisQuestionCorrect, 'ISCORRECT FROM USER INPUT');
let isCorrect ={};
// console.log(this.state.thisQuestionCorrect, 'thisQuestionCorrect from REDUX STATE')
 isCorrect.isCorrect = this.state.thisQuestionCorrect;
this.props.dispatch(fetchNextQuestion(headers, isCorrect));
console.log('NExt Question Async call made fROM USER INPUT');
}
showNext() {
  this.setState({
      nextClass: 'next',
  }, function () {
      console.log(this.state.answerLabel);
  })  

}
reset(){
  this.setState({
    answerLabel: 'Answer',
    labelColor: 'black',
    nextClass: 'hidden'
  }, function () {
    this.refs.userInput.value ='';
  })
}

render(){
  // console.log(this.state, '<<<this.state');
 
 
  return (
    <div>
    <section className="answer">
    <label className={this.state.labelColor}>{this.state.answerLabel} <br /> </label>
    <input placeholder="Enter guess here" ref="userInput" />
    <button onClick={(e)=>{   
      e.preventDefault();
        this.handleUserInput(this.refs.userInput.value);
        this.showNext();
    }} className="submit">Submit</button>
    </section>
    <button onClick={() => {
    this.props.getNextQuestion();
    this.reset();
  }  
  }
    className={this.state.nextClass}>Next</button>
    </div>
  );
}
}


const mapStateToProps = state => {  
  return {
      
       authToken: state.auth.authToken,
       currentQuestion: state.question.currentQuestion,
      
     
      feedback: state.feedback,
      correctAnswer: state.correctAnswer,

      userInput: state.scoring.userInput,
      thisQuestionCorrect: state.scoring.thisQuestionCorrect

  };
};

export default connect(mapStateToProps)(UserInput);

