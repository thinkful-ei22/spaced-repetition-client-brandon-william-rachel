import { FETCH_QUESTION_REQUEST, FETCH_QUESTION_SUCCESS, FETCH_QUESTION_ERROR} from '../actions/question';
import { FETCH_NEXT_QUESTION_REQUEST, FETCH_NEXT_QUESTION_ERROR} from '../actions/questions-next';
const initialState = {
    loading: false,
    currentQuestion: null,
    error: null,
    
}




export  default function questionReducer(state=initialState, action) {
    if( action.type===FETCH_QUESTION_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    } else if( action.type===FETCH_QUESTION_SUCCESS){
        return Object.assign({}, state, {
            loading: false,
            currentQuestion: action.currentQuestion
        })
    } else if( action.type===FETCH_QUESTION_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    } else  if( action.type===FETCH_NEXT_QUESTION_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    } 
    
    // else if( action.type===FETCH_NEXT_QUESTION_SUCCESS){
    //     return Object.assign({}, state, {
    //         loading: false,
    //         //bc score is obj and we're grabbing properties stored in obj
    //         score: action.score.score
            
    //     })
    // } 
    
    else if( action.type===FETCH_NEXT_QUESTION_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }   return state;

};