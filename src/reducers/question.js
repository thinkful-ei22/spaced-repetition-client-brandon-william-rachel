import { FETCH_QUESTION_REQUEST, FETCH_QUESTION_SUCCESS, FETCH_QUESTION_ERROR} from '../actions/question';

const initialState = {
    loading: false,
    _currentQuestion: null,
    error: null
}




export  default function questionReducer(state=initialState, action) {
    if( action.type===FETCH_QUESTION_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    } else if( action.type===FETCH_QUESTION_SUCCESS){
        return Object.assign({}, state, {
            loading: false,
            _currentQuestion: action._currentQuestion
        })
    } else if( action.type===FETCH_QUESTION_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }  return state;

};