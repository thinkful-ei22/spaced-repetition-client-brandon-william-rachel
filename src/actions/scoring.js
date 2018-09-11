import Question from './question';

  

export const FETCH_SCORING_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchScoringRequest = () => ({
    type: FETCH_SCORING_REQUEST
});

export const FETCH_SCORING_SUCCESS = 'FETCH_SCORING_SUCCESS';
export const fetchScoringSuccess = (userInput, thisQuestionAsked, totalQuestionsCorrect,
  totalQuestionsAsked, accuracy) => ({
  type: FETCH_SCORING_SUCCESS,
  userInput,
  thisQuestionCorrect,
  totalQuestionsCorrect,
  totalQuestionsAsked,
  accuracy
});

export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const correctAnswer = (userInput, thisQuestionAsked, totalQuestionsCorrect,
  totalQuestionsAsked, accuracy) => ({
    type: CORRECT_ANSWER,
    userInput,
  thisQuestionCorrect,
  totalQuestionsCorrect,
  totalQuestionsAsked,
  accuracy
  });

  export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';
export const incorrectAnswer = (userInput, thisQuestionAsked, totalQuestionsCorrect,
  totalQuestionsAsked, accuracy) => ({
    type: INCORRECT_ANSWER,
    userInput,
  thisQuestionCorrect,
  totalQuestionsCorrect,
  totalQuestionsAsked,
  accuracy
  });

export const FETCH_SCORING_ERROR = 'FETCH_SCORING_ERROR';
export const fetchScoringError = () => ({
  type: FETCH_SCORING_ERROR,
  error
});

