import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './styles/landing-page.css'
export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
       
        <div className="home">

            <main className="main-img-section">
                <img src={require('../images/dothrakhorses.jpg')} alt="Dothraki horses statue" className="main-img darken" />
                <li><img src={require('../images/LearningDothraki.png')} alt="learn dothraki logo" className="logo"/></li>
                <h2 className="headline-text">Face the other bloodlords with confidence</h2>
                <a className="begin"><Link to="/register">BEGIN</Link></a>
            </main>

            <section className="description-row-1">
                <div className="column">
                    <h3 className="title">You want to learn to speak Dothraki?</h3>
                    
                </div>

                <div className="column">
                <p className="text">
                            Once you register, you'll be provided your own dashboard full of popular vocabulary and useful phrases. LearnDothraki gives you an edge by noticing which words you excel in, and which may need some extra revision.
                        </p>
                </div>
            </section>
            <section className="description-row-1">
                <div className="column">
                <p>
                            We use spaced repetition to optimize your ability to retain information in the long term. You don't have to worry about organizing flash cards- this program will guide you to what you need to practice, till you get it right every time.
                        </p>
                </div>
                <div className="column">
                    <h3 className="title2">Spaced Repetition</h3>
                    <div className="text">
                    </div>
                </div>
            </section>
            <section className="description-row-2">
                <div className="how-to">
                    <h3 className="title3">How to use: </h3>
                    <div className="text">
                        <p>
                            It's simple, we'll present a word in Dothraki, you type in what it means in English. We'll help you learn faster, so you have more time for dragon taming.
                        </p>
                    </div>
                </div>
            </section>
            <div className="footer"></div>
        </div>
       
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
