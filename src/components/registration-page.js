import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';
import './styles/registration-page.css';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="registration">
        <main className="main-img-section">
        <h2 className="headline-text">Learn the language of the Horselords</h2>


            <img src={require('../images/dothraki-main.jpg')} alt="Dothraki Horde"  className="main-img"/>
            <div className="register">
                        <RegistrationForm />

            </div>
            </main>
                   </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
