import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegistrationForm from './registration-form';
import HeaderBar from "./header-bar"

import './styles/registration-page.css';

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aboutClass: 'hide',
            homeClass: 'about'
                }
    }

      render() {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (this.props.loggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div className="registration-page">
        <HeaderBar aboutClass={this.state.aboutClass} homeClass ={this.state.homeClass} />
            <main className="main-reg-section">
                <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img" />
                    <RegistrationForm />
            </main>
            </div>
    )

}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
