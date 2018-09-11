import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import { fetchQuestion } from '../actions/question';
import Answer from './answer';

import PromptSection from './prompt-section';


export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            answerLabel: 'Correct'
        }
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
                <Answer />
                <button className="next">Next</button>
            <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde"  className="main-img"/>

            </main>
               
                
                <div className="dashboard-name">Logged in as: {this.props.name}</div>
                
                <PromptSection _currentQuestion={(!this.props._currentQuestion)  ?  'loading' : this.props._currentQuestion}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstname} ${currentUser.lastName}`,
        authToken: state.auth.authToken,
        _currentQuestion: state.currentQuestion._currentQuestion
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
