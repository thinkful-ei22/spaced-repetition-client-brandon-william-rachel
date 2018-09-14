import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './styles/landing-page.css'
import InfoModal from "./info-modal"

export function LandingPage(props) {
    const currentOverlay = props.overlay;

    switchOverlay() {
        const currentOverlay = this.state.overlay;
        this.setState({
          overlay : !currentOverlay
        });
      }

    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    if (currentOverlay === false) {
        return (
            <div className="home">
                <main className="main-img-section-landing">
                    <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img-landing" />
                    <li><img src={require('../images/LearningDothraki.png')} alt="learn dothraki logo" className="logo-landing" /></li>
                    <h2 className="headline-text-landing">Face the other bloodlords with confidence</h2>
                    <a className="begin"><Link to="/register">BEGIN</Link></a>
                </main>
            </div>
        )
    } else {
        return(
            <div className="home">
            <InfoModal switchOverlay={() => props.switchOverlay()}/>
                <main className="main-img-section-landing">
                    <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img-landing" />
                    <li><img src={require('../images/LearningDothraki.png')} alt="learn dothraki logo" className="logo-landing" /></li>
                    <h2 className="headline-text">Face the other bloodlords with confidence</h2>
                    <a className="begin"><Link to="/register">BEGIN</Link></a>
                </main>
            </div>
        );
    }
}

    const mapStateToProps = state => ({
        loggedIn: state.auth.currentUser !== null
    });

    export default connect(mapStateToProps)(LandingPage);
