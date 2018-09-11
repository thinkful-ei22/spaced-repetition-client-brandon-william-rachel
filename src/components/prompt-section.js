import React from 'react';
//import { connect } from 'react-redux';

export class PromptSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hintVisible: false
        }
    }
    
showHint(e) {
    e.preventDefault();
    this.setState({
        hintVisible: !hintVisible
    })

}


render() {

const Prompt = <h3>{this.props.currentQuestion.prompt}</h3>

let Hint='';
if( this.state.hintVisible !== false){
   Hint = (
        <h3>{this.props.currentQuestion.hint}</h3>
    )
}


return (

    <div className="prompt-section">
        {Prompt}
        <button id="hint-button" type="submit" onClick={this.showHint}>Hint</button>
        {Hint}
    </div>
)
}
}