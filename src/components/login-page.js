import React from 'react';
import { connect } from 'react-redux';
import './styles/login-page.css';
import LoginForm from './login-form';
import HeaderBar from "./header-bar"
import InfoModal from "./info-modal"

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            overlay: false
        }
        this.switchOverlay = this.switchOverlay.bind(this)
    }
    switchOverlay(bool) {
        // const currentOverlay = this.state.overlay;
        this.setState({
          overlay : bool
        })
      }

      render() {
        if (this.state.overlay === false) {
    return (

        <div className="login-page">
            <HeaderBar switchOverlay={this.switchOverlay}/>
                <main className="main-login-section">
                    <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img darken" />
                    <div className="login-form-container">
                        <LoginForm />
                    </div>
                </main>
                </div>


    )
        }else {
            return(
<div className="login-page">
            <HeaderBar switchOverlay={this.switchOverlay}/>
            <InfoModal switchOverlay={this.switchOverlay}/>
                <main className="main-login-section">
                    <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img darken" />
                    <div className="login-form-container">
                        <LoginForm />
                    </div>
                </main>
                </div>
            );
}
      }
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);