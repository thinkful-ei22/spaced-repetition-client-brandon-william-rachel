import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
    
    return (
        <div>
            <div className="login-page">
        <main className="main-img-section">

            <h2 className="headline-text">Learn the language of the Horselords</h2>

            <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde"  className="main-img"/>
            <div className="register">
            <LoginForm/>

            </div>
            </main>
                   </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);