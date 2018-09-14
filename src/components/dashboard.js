import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
//import {fetchProtectedData} from '../actions/protected-data';
import { fetchQuestion } from '../actions/question';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import FeedbackSection from './feedback-section';
import DashHeaderBar from './dash-header-bar';
import UserInput from './user-input';
import './styles/dashboard.css';

import PromptSection from './prompt-section';


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answerLabel: '',
            labelColor: 'black',
            thisQuestionCorrect: false,
            totalQuestionsCorrect: 0,
            totalQuestionsAsked: 0,
            accuracy: 0,
            nextClass: 'hidden',
        }
    }

    setScore() {
        if (this.state.thisQuestionCorrect === true) {
            this.setState({
                totalQuestionsCorrect: this.state.totalQuestionsCorrect + 1,
                totalQuestionsAsked: this.state.totalQuestionsAsked + 1
            },
                function () {
                    this.setState({
                        accuracy: (this.state.totalQuestionsCorrect / this.state.totalQuestionsAsked) * 100
                    })
                }
            );
        }
        else {

            this.setState({
                totalQuestionsAsked: this.state.totalQuestionsAsked + 1
            }, function () {
                this.setState({
                    accuracy: (this.state.totalQuestionsCorrect / this.state.totalQuestionsAsked) * 100
                })
            });
        }

    }



    componentDidUpdate(nextProps) {
        if (nextProps.userInput !== this.props.userInput) {

            if (this.props.userInput !== '') {


                if (this.props.userInput.toLowerCase() === this.props._currentQuestion.answer.toLowerCase()) {
                    this.setState({
                        thisQuestionCorrect: true,
                        answerLabel: 'Correct!',
                        labelColor: 'green'
                    }, function () {
                        this.setScore();
                        this.showFinish();
                    });

                }
                else {
                    this.setState({
                        thisQuestionCorrect: false,
                        answerLabel: 'Incorrect',
                        labelColor: 'red'
                    }, function () {
                        console.log(this.state.thisQuestionCorrect);
                        this.setScore();
                        this.showFinish();
                    });
                }
            }
        }
    }
    componentDidMount() {
        const headers = {
            'Authorization': 'Bearer ' + this.props.authToken,
            'Content-Type': 'application/json'
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
        return <UserInput labelColor={this.state.labelColor} answerLabel={this.state.answerLabel} />;
    }

    showFinish() {
        this.setState({
            nextClass: 'next'
        })
    }
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    
    render() {




        // const currentQuestion = {
        //     prompt: 'The stars are charging for you!',
        //     hint: 'The Dothraki word for "stars" is "shieraki"',
        //     answer: 'Shieraki gori ha yeraan!'
        // }



        return (
            <div className="dashboard">
            <section className="">

            </section>
                <main className="main-img-section">
                    {this.showLabel()}
                    <button className={this.state.nextClass}>Next</button>
                    <button className="finish" onClick={() => this.logOut()}>Finish</button>
                    <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde" className="main-img" />
                    <FeedbackSection feedback={this.props.feedback} />
                    <PromptSection _currentQuestion={(!this.props._currentQuestion) ? 'loading' : this.props._currentQuestion} />
                </main>
                <div className="dashboard-name">Logged in as: {this.props.name}</div>
                <div className="score">Word Accuracy: {this.showAccuracy()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;

    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstname} ${currentUser.lastName}`,
        authToken: state.auth.authToken,
        _currentQuestion: state.currentQuestion._currentQuestion,
        userInput: state.scoring.userInput,
        feedback: state.feedback,
        correctAnswer: state.correctAnswer

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
