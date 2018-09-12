import {
  FETCH_SCORING_REQUEST, 
  // FETCH_SCORING_SUCCESS,
  HANDLE_SUBMIT,
  // CORRECT_ANSWER,
  // INCORRECT_ANSWER,
  FETCH_SCORING_ERROR
} from '../actions/scoring';
const initialState = {
  userInput: '',
  thisQuestionCorrect: false,
  totalQuestionsCorrect: 0,
  totalQuestionsAsked: 0,
  accuracy: 0,
  error: null,
  loading: false
}

export default function reducer(state = initialState, action){
  if (action.type === FETCH_SCORING_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
    }

  else if (action.type === HANDLE_SUBMIT){
    return Object.assign({}, state, {
      userInput: action.userInput.toLowerCase()
    })
  }

  if (action.type === FETCH_SCORING_ERROR){
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
    }
return state;
}