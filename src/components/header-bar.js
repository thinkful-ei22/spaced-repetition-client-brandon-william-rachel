import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import {Link} from 'react-router-dom';
import './styles/header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
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
                <a className="about"href="#" onClick={() => this.props.switchOverlay(true)}>About</a>
            )
        }
        return (
            <section className="header-bar">
                <ul>
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