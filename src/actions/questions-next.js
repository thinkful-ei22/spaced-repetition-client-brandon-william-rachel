
import {API_BASE_URL} from '../config'; 

export const fetchNextQuestion = (headers, isCorrect) => (dispatch, getState)  => {
    dispatch(fetchNextQuestionRequest());
    //const username = getState().auth.currentUser.username;
    console.log(isCorrect, 'ISCORRECT FROM ASYNC ACTION')
    return fetch(`${API_BASE_URL}/questions/answer`, { 
    method:'POST',
    headers,
    body: JSON.stringify(isCorrect)
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(() => {
        console.log();
        dispatch(fetchNextQuestionSuccess())
    }
        
    ).catch(err =>
        dispatch(fetchNextQuestionError(err))
    )
};

export const FETCH_NEXT_QUESTION_REQUEST = 'FETCH_NEXT_QUESTION_REQUEST';
export const fetchNextQuestionRequest = () => ({
    //handleSuccess
    type: FETCH_NEXT_QUESTION_REQUEST
});

export const FETCH_NEXT_QUESTION_SUCCESS = 'FETCH_NEXT_QUESTION_SUCCESS';
export const fetchNextQuestionSuccess = () => ({
    //handleSuccess
    type: FETCH_NEXT_QUESTION_SUCCESS,
    //currentQuestion: question
});

export const FETCH_NEXT_QUESTION_ERROR = 'FETCH_NEXT_QUESTION_ERROR';
export const fetchNextQuestionError = error => ({
    type: FETCH_NEXT_QUESTION_ERROR,
    error
});


