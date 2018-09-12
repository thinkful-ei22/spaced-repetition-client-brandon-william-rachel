import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
//import {fetchProtectedData} from '../actions/protected-data';
import { fetchQuestion } from '../actions/question';

import FeedbackSection from './feedback-section';
import UserInput from './user-input';
import './styles/app.css';

import PromptSection from './prompt-section';


export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            answerLabel: '',
            labelColor: 'black',
            thisQuestionCorrect: false,
            totalQuestionsCorrect: 0,
            totalQuestionsAsked: 0,
            accuracy: 0
        }
    }
     setScore(){
         if (this.state.thisQuestionCorrect === true){
             this.setState({
                 totalQuestionsCorrect: this.state.totalQuestionsCorrect+1,
                 totalQuestionsAsked: this.state.totalQuestionsAsked+1
             }, 
             function(){
                 this.setState({
                     accuracy: (this.state.totalQuestionsCorrect/this.state.totalQuestionsAsked)*100
                 })
             }
                 );
         }
         else {

            this.setState({
                totalQuestionsAsked: this.state.totalQuestionsAsked + 1
            },  function(){
                this.setState({
                    accuracy: (this.state.totalQuestionsCorrect/this.state.totalQuestionsAsked)*100
                })
            } );
         }
       
    }
    

    
    componentDidUpdate(nextProps){
        if (nextProps.userInput !== this.props.userInput){
          
            if (this.props.userInput !== ''){


                if (this.props.userInput.toLowerCase() === this.props._currentQuestion.answer.toLowerCase()){
                    this.setState({
                        thisQuestionCorrect: true,
                        answerLabel:'Correct!',
                        labelColor:'green'
                    }, function(){
                        this.setScore();
                    });

                }
                else {
                    this.setState({
                        thisQuestionCorrect: false,
                        answerLabel:'Incorrect',
                        labelColor: 'red'
                    }, function(){
                        console.log(this.state.thisQuestionCorrect);
                        this.setScore();
                    });
                }

            }
        }

    }
    
    componentDidMount() {
        const headers = {
            'Authorization': 'Bearer ' + this.props.authToken,
            'Content-Type' : 'application/json'
          };
        this.props.dispatch(fetchQuestion(headers));
        
        this.setState({
            answerLabel: 'Answer'
        });
        console.log()
    }

    showAccuracy() {

        if (this.state.totalQuestionsAsked > 0) {
            return <span id="percentage">{this.state.accuracy}%</span>;
        }
        else {
            return <span id="percentage"> %</span>;
        }           

    }
    showLabel() {

            return <UserInput labelColor={this.state.labelColor} answerLabel ={this.state.answerLabel} />;               
    }
    

    render() {




        // const currentQuestion = {
        //     prompt: 'The stars are charging for you!',
        //     hint: 'The Dothraki word for "stars" is "shieraki"',
        //     answer: 'Shieraki gori ha yeraan!'
        // }
       

      
        return (
            <div className="dashboard">
                <main className="main-img-section">
                {this.showLabel()}
                <button className="next">Next</button>
            <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde"  className="main-img"/>
                <FeedbackSection
                    feedback={ this.props.feedback}
                    //feedback reducer info goes here?
                />
            </main>
               
                
                <div className="dashboard-name">Logged in as: {this.props.name}</div>
                <div className="score">Word Accuracy: {this.showAccuracy()}</div>
                
                
                <PromptSection currentQuestion={(!this.props.currentQuestion)  ?  'loading' : this.props.currentQuestion}/>
            </div>
        );
    }
}

// DEFAULT PROPS?? - is this where the correct answers go?

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstname} ${currentUser.lastName}`,
        authToken: state.auth.authToken,

        currentQuestion: state.question.currentQuestion,
        
        userInput: state.scoring.userInput,
        feedback: state.feedback,
        correctAnswer: state.correctAnswer

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
