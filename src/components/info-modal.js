import React from 'react';

import './styles/info-modal.css';

export default function InfoModal(props) {
    return (
        <div className="overlay" id="modal">
            <div className="content">
                <h3>Winter’s coming: you don’t have time for non-optimized learning! </h3>
                <div>
                <p>Tired of feeling left out when everyone is speaking Dothraki at your local grog hall? </p>
                    <ul>
                        <li>Once you register, you'll be provided your own dashboard full of popular vocabulary and useful phrases. LearnDothraki gives you an edge by noticing which words you excel in, and which may need some extra revision</li>
                        <li>We use spaced repetition to optimize your ability to retain information in the long term. You don't have to worry about organizing flash cards- this program will guide you to what you need to practice, till you get it right every time.</li>
                        <li>It's simple, we'll present a word in Dothraki, you type in what it means in English. We'll help you learn faster, so you have more time for dragon taming.</li>
                    </ul>
                    </div>
                    <p>Learn Dothraki will make you feel like the Kaal Drogo of your horde, are you ready?</p>
                    <button className="close" onClick={() => props.switchOverlay(false)}>Gwe!!</button>
            </div>
        </div>
    );
}
