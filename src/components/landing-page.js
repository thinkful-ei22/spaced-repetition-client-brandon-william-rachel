import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './styles/landing-page.css'
import InfoModal from "./info-modal"
import HeaderBar from "./header-bar"

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            overlay: false,
            aboutClass: 'about',
            homeClass: 'hide'
        }
        this.switchOverlay = this.switchOverlay.bind(this)
    }
    

    // const currentOverlay = this.props.overlay;

    switchOverlay(bool) {
        // const currentOverlay = this.state.overlay;
        this.setState({
          overlay : bool
        })
      }

      render() {
    // If we are logged in redirect straight to the user's dashboard
    if (this.props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    if (this.state.overlay === false) {
        return (
            
            <div className="home" lang="en">
            <HeaderBar aboutClass={this.state.aboutClass} homeClass ={this.state.homeClass} switchOverlay={this.switchOverlay}/>
                <main className="main-img-section-landing">
                    <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img-landing" />
                    <img src={require('../images/LearningDothraki.png')} alt="learn dothraki logo" className="logo-landing" />
                    <h2 className="headline-text-landing">Face the other bloodlords with confidence</h2>
                    <button className="begin"><Link to="/register">BEGIN</Link></button>
                </main>
            </div>
        )
    } else {
        return(
            <div className="home">
            <HeaderBar switchOverlay={this.switchOverlay}/>
                <main className="main-img-section-landing">
                    <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img-landing" />
                    <img src={require('../images/LearningDothraki.png')} alt="learn dothraki logo" className="logo-landing" />
                    <h2 className="headline-text-landing">Face the other bloodlords with confidence</h2>
                    <button className="begin"><Link to="/register">BEGIN</Link></button>
                    <InfoModal switchOverlay={this.switchOverlay}/>

                </main>
            </div>
        );
    }
}

}
    const mapStateToProps = state => ({
        loggedIn: state.auth.currentUser !== null
    });

    export default connect(mapStateToProps)(LandingPage);
