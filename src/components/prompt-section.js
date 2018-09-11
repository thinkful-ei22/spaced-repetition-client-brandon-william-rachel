import React from 'react';
//import { connect } from 'react-redux';

export default class PromptSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hintVisible: false
        }
    }


    
showHint(e) {
    e.preventDefault();
    this.setState({
        hintVisible: !this.state.hintVisible
    })

}
//this inside the constructor

render() {
    //console.log(this.props._currentQuestion.hint);
    //console.log('Elmos World', this.state)
    console.log(this.props)
const Prompt = <h3>{(this.props._currentQuestion =='loading') ? 'loading' : this.props._currentQuestion.question }</h3>

let Hint='';
if( this.state.hintVisible !== false){
   Hint = (
        <h3>{this.props._currentQuestion.hint}</h3>
    )
}


return (

    <div className="prompt-section">
        {Prompt}
        <button id="hint-button" type="submit" onClick={this.showHint.bind(this)}>Hint</button>
        {Hint}
    </div>
)
}
}