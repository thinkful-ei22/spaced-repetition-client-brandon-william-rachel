export const FETCH_SCORING_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchScoringRequest = () => ({
    type: FETCH_SCORING_REQUEST
});

// export const FETCH_SCORING_SUCCESS = 'FETCH_SCORING_SUCCESS';
// export const fetchScoringSuccess = ( thisQuestionCorrect, totalQuestionsCorrect,
//   totalQuestionsAsked, accuracy) => ({
//   type: FETCH_SCORING_SUCCESS,
//   thisQuestionCorrect,
//   totalQuestionsCorrect,
//   totalQuestionsAsked,
//   accuracy
// });

export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const handleSubmit = (userInput) => ({
  type: HANDLE_SUBMIT,
  userInput
})

// export const CORRECT_ANSWER = 'CORRECT_ANSWER';
// export const correctAnswer = (userInput, thisQuestionCorrect, totalQuestionsCorrect,
//   totalQuestionsAsked, accuracy) => ({
//     type: CORRECT_ANSWER,
//   thisQuestionCorrect,
//   totalQuestionsCorrect,
//   totalQuestionsAsked,
//   accuracy
//   });

//   export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';
// export const incorrectAnswer = (userInput, thisQuestionCorrect, totalQuestionsCorrect,
//   totalQuestionsAsked, accuracy) => ({
//     type: INCORRECT_ANSWER,
//   thisQuestionCorrect,
//   totalQuestionsCorrect,
//   totalQuestionsAsked,
//   accuracy
//   });

export const FETCH_SCORING_ERROR = 'FETCH_SCORING_ERROR';
export const fetchScoringError = error => ({
  type: FETCH_SCORING_ERROR,
  error
});

