import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import PromptSection from './prompt-section';

export class Dashboard extends React.Component {
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
        //console.log()
        return (
            <div className="dashboard">
                <main className="main-img-section">

            <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde"  className="main-img"/>

            </main>
               
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Hello {this.props.name}!</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
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
