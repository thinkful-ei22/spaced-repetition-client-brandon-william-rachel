import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import {Link} from 'react-router-dom';
import './styles/dash-header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        console.log(this.props,"=======")
        // Only render the log out button if we are logged in
        let logOutButton, signUpButton, logInButton, aboutToggle;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout" onClick={() => this.logOut()}>Log out</button>
            );
        }
        else {
            signUpButton =(
            <button className="signup">Sign Up</button>
            );
            logInButton =(
                <button className="login">Log In</button>
                );
            aboutToggle =(
                <button className="about" onClick={() => this.props.switchOverlay(true)}>About</button>
            );
        }
        return (
            <section className="dash-header-bar">
                <ul>
                    <li><img src={require('../images/LearningDothraki.png')} alt="learn dothraki logo" className="dash-logo"/></li>
                    <Link to="/register"><li>{signUpButton}</li></Link>
                    <Link to="/login"><li>{logInButton}</li></Link>
                    {aboutToggle}
                    {logOutButton}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);