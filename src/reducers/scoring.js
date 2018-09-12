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
  // else if (action.type === FETCH_SCORING_SUCCESS){
  //   return Object.assign({}, state, {
  //     thisQuestionCorrect: action.thisQuestionCorrect,
  //     totalQuestionsAsked: action.totalQuestionsAsked,
  //     totalQuestionsCorrect: action.totalQuestionsCorrect,
  //     accuracy: action.accuracy

  //   });
  // }
  else if (action.type === HANDLE_SUBMIT){
    return Object.assign({}, state, {
      userInput: action.userInput.toLowerCase()
    })
  }
  // else if (action.type === CORRECT_ANSWER){
  //   return Object.assign({}, state, {
  //    thisQuestionCorrect: true,
  //     totalQuestionsAsked: action.totalQuestionsAsked+1,
  //     totalQuestionsCorrect: action.totalQuestionsCorrect+1,
  //     accuracy: (this.totalQuestionsCorrect/this.totalQuestionsAsked)*100

  //   });
  // }
  // else if (action.type === INCORRECT_ANSWER){
  //   return Object.assign({}, state, {
  //     thisQuestionCorrect: false,
  //     totalQuestionsAsked: action.totalQuestionsAsked+1,
  //     totalQuestionsCorrect: action.totalQuestionsCorrect,
  //     accuracy: (this.totalQuestionsCorrect/this.totalQuestionsAsked)*100

  //   });
  // }
  if (action.type === FETCH_SCORING_ERROR){
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
    }
return state;
}