import React from 'react';
import {connect} from 'react-redux';


import { fetchNextQuestion } from '../actions/questions-next';
import './styles/app.css';
import { handleSubmit } from '../actions/scoring';
export class UserInput extends React.Component {
// constructor(props){
//   super(props);
// }

 handleUserInput(userInput){
  if (userInput !== ''){


    if (userInput.toLowerCase() === this.props.currentQuestion.answer.toLowerCase()){
        this.setState({
            thisQuestionCorrect: true,
            answerLabel:'Correct!',
            labelColor:'green'
        })
        //   }, function(){
        //     this.setScore();
        //     this.showFinish();
        // });

    }
    else {
        this.setState({
            thisQuestionCorrect: false,
            answerLabel:'Incorrect',
            labelColor: 'red'
        }
        
        // , function(){
        //    // console.log(this.state.thisQuestionCorrect);
        //     this.setScore();
        //     this.showFinish();
        // });
        )}
}
this.nextQuestion();
 }
nextQuestion(){
  const headers = {
    'Authorization': 'Bearer ' + this.props.authToken,
    'Content-Type' : 'application/json'
  };


//   console.log(memoryStrength, 'MEMORY STRENGTH>>>>>');

console.log(this.props.thisQuestionCorrect, 'ISCORRECT FROM USER INPUT');
let isCorrect ={};
 isCorrect.isCorrect = this.props.thisQuestionCorrect;
this.props.dispatch(fetchNextQuestion(headers, isCorrect));
console.log('NExt Question Async call made fROM USER INPUT');
}

render(){
  console.log(this.state);
  return (
    <section className="answer">
    
    <label className={this.props.labelColor}>{this.props.answerLabel} <br /> </label>
    <input placeholder="Enter guess here" ref="userInput" />
    <button onClick={()=>{   
        //this.props.dispatch(handleSubmit(this.refs.userInput.value));
        this.handleUserInput(this.refs.userInput.value);
       
        
    } }>Submit</button>
    </section>
  );
}
}


const mapStateToProps = state => {
  //const {currentUser} = state.auth;
  
  return {
      // username: state.auth.currentUser.username,
      // name: `${currentUser.firstname} ${currentUser.lastName}`,
       authToken: state.auth.authToken,
       currentQuestion: state.question.currentQuestion,
      
     
      feedback: state.feedback,
      correctAnswer: state.correctAnswer,

      userInput: state.scoring.userInput,
      thisQuestionCorrect: state.scoring.thisQuestionCorrect

  };
};

export default connect(mapStateToProps)(UserInput);

//export default connect()(UserInput);