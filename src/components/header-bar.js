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
        console.log(this.props,"=======")
        // Only render the log out button if we are logged in
        let logOutButton, signUpButton, logInButton, aboutToggle, landingPageButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout" onClick={() => this.logOut()}>Log out</button>
            );
        }
        else {
            landingPageButton = (
                <button className={this.props.homeClass}>Home</button>
            )
            signUpButton =(
            <button className="signup">Sign Up</button>
            );
            logInButton =(
                <button className="login">Log In</button>
                );
            aboutToggle =(
                <button className={this.props.aboutClass} onClick={() => this.props.switchOverlay(true)}>About</button>
            );
        }
        return (
            <section className="header-bar">
                <ul>
                    <Link to="/"><li>{landingPageButton}</li></Link>
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