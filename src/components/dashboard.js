import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Answer from './answer';
export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            answerLabel: 'Correct'
        }
    }
    
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
       
        return (
            <div className="dashboard">
                <main className="main-img-section">
                <Answer />
            <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde"  className="main-img"/>
                <FeedbackSection
                    feedback={ this.props.feedback}
                    //feedback reducer info goes here?
                />
            </main>
               
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Hello {this.props.name}!</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
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
        protectedData: state.protectedData.data,
        userAnswer: state.answer,
        feedback: state.feedback,
        correctAnswer: state.correctAnswer

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
