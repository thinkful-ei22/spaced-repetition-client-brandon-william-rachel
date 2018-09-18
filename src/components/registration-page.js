import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';
import './styles/registration-page.css';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
            <main className="main-img-section">
                <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img" />
                <div className="registeration-form-container">
                    <RegistrationForm />
                </div>
            </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
