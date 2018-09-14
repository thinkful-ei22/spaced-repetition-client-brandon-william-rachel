import React from 'react';
import { connect } from 'react-redux';
import './styles/login-page.css';
import LoginForm from './login-form';

export function LoginPage(props) {

    return (

                <main className="main-img-section">
                    <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img darken" />
                    <div className="login-form-container">
                        <LoginForm />
                    </div>
                </main>


    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);