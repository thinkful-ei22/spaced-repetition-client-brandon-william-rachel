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
            correctAnswer: 0,
            totalQuestions: 0,
            score: 0
        }
    }
     setScore(e){

        this.setState({
            score: (this.state.correctAnswer/this.state.totalQuestions)*100
        });
    }
    

    
    componentDidMount() {
        const headers = {
            'Authorization': 'Bearer ' + this.props.authToken,
            'Content-Type' : 'application/json'
          };
        this.props.dispatch(fetchQuestion(headers));
        
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
                <UserInput onClick={e => this.setScore(e)}/>
                <button className="next">Next</button>
            <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde"  className="main-img"/>
                <FeedbackSection
                    feedback={ this.props.feedback}
                    //feedback reducer info goes here?
                />
            </main>
               
                
                <div className="dashboard-name">Logged in as: {this.props.name}</div>
                <div className="score">Word Accuracy: <span id="percentage">{this.state.score}</span>%</div>
                
                
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

        userAnswer: state.answer,
        feedback: state.feedback,
        correctAnswer: state.correctAnswer

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
