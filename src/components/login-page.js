import React from 'react';
import { connect } from 'react-redux';
import './styles/login-page.css';
import LoginForm from './login-form';
import HeaderBar from "./header-bar"

class LoginPage extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            aboutClass:'hide',
            homeClass: 'about'
        }
    }
  
  

      render() {
       
    return (

        <div className="login-page">
            <HeaderBar aboutClass={this.state.aboutClass} homeClass ={this.state.homeClass}/>
                <main className="main-login-section">
                    <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img darken" />
                    <div className="login-form-container">
                        <LoginForm />
                    </div>
                </main>
                </div>


    )
        }
      }
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);