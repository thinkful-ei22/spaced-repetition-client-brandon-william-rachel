import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

import Answer from './answer';
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
        this.props.dispatch(fetchProtectedData());
    }

    

    render() {





        const currentQuestion = {
            prompt: 'The stars are charging for you!',
            hint: 'The Dothraki word for "stars" is "shieraki"',
            answer: 'Shieraki gori ha yeraan!'
        }
        console.log(this.props);

      
        return (
            <div className="dashboard">
                <main className="main-img-section">
                <Answer onClick={e => this.setScore(e)}/>
                <button className="next">Next</button>
            <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde"  className="main-img"/>

            </main>
               
                
                <div className="dashboard-name">Logged in as: {this.props.name}</div>
                <div className="score">Word Accuracy: <span id="percentage">{this.state.score}</span>%</div>
                <PromptSection _currentQuestion={currentQuestion}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstname} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
