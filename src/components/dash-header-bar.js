import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import {Link} from 'react-router-dom';
import './styles/dash-header-bar.css';

export class DashHeaderBar extends React.Component {
    
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <section className="dash-header-bar">
                <ul>
                <li><img src={require('../images/LearningDothraki.png')} alt="learn dothraki logo" className="logo"/></li>
                    <a className="about" href="#" onClick={() => this.props.switchOverlay()}>About</a>
                    {logOutButton}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DashHeaderBar);