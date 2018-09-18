import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchQuestion } from '../actions/question';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import UserInput from './user-input';
import './styles/dashboard.css';

import PromptSection from './prompt-section';


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thisQuestionCorrect: false,
            answerLabel: 'Answer',
            labelColor: 'black',
            totalQuestionsCorrect: 0,
            totalQuestionsAsked: 0,
            accuracy: 0,
        }
    }
 

    componentDidMount() {
        //const { username }= this.props;
        const headers = {
            'Authorization': 'Bearer ' + this.props.authToken,
            'Content-Type': 'application/json'
        };
        this.props.dispatch(fetchQuestion(headers));

        this.setState({
            answerLabel: 'Answer'
        });
    }
    changeLabels(){
        console.log(this.props, '<<<this.props');
    }

    showAccuracy() {
        console.log('CURRENT SCORE______', this.props.currentUser.score);
        if (this.state.totalQuestionsAsked > 0) {
            return <span id="percentage">{this.props.currentUser.score}</span>;
        }
        else {
            return <span id="percentage"> </span>;
        }           
    }


    
    showLabel() {
        
            return ;               
    }

                

logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
}

getNextQuestion(){
    const headers = {
        'Authorization': 'Bearer ' + this.props.authToken,
        'Content-Type' : 'application/json'
      };
    this.props.dispatch(fetchQuestion(headers));
}
    render() {
        return (
            <div className="dashboard">
                <main className="dash-main-img-section">
                <PromptSection currentQuestion={(!this.props.currentQuestion)  ?  'loading' : this.props.currentQuestion}/>
                <UserInput getNextQuestion={() => this.getNextQuestion()} />

            <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde"  className="dash-main-img"/>
            </main>
            <button className="finish" onClick={() => this.logOut()}>Finish</button>
                <div className="dashboard-name">Logged in as: {this.props.username}</div>
                <div className="score">Score: {this.showAccuracy()}</div>
                
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;

    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        authToken: state.auth.authToken,
        currentUser: state.auth.currentUser,

        currentQuestion: state.question.currentQuestion,
        thisQuestionCorrect: state.scoring.thisQuestionCorrect,
        userInput: state.scoring.userInput,
        feedback: state.feedback,
        correctAnswer: state.correctAnswer

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
