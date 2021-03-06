
import {API_BASE_URL} from '../config'; 

export const fetchQuestion = (headers) => (dispatch, getState)  => {
    dispatch(fetchQuestionRequest());
    //const username = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/questions`, { 
    method:'GET',
    headers
    //body: JSON.stringify(username)
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(data => {
        console.log(data);
        dispatch(fetchQuestionSuccess(data))
    }
        
    ).catch(err =>
        dispatch(fetchQuestionError(err))
    )
};

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
    //handleSuccess
    type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = (question) => ({
    //handleSuccess
    type: FETCH_QUESTION_SUCCESS,
    currentQuestion: question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
    type: FETCH_QUESTION_ERROR,
    error
});


