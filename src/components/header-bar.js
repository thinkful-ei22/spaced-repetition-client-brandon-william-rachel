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
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <section className="header-bar">
                <ul>
                    <li><img src={require('../images/LearningDothraki.png')} alt="learn dothraki logo" className="logo"/></li>
                    <Link to="/register"><li><button className="signup">Sign Up</button></li></Link>
                    <Link to="/login"><li><button className="login">Log In</button></li></Link>
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
