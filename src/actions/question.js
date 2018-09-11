
import {API_BASE_URL} from '../config'; 

export const fetchQuestion = (bearer) => dispatch => {
    dispatch(fetchQuestionRequest());
    return fetch(`${API_BASE_URL}/question`, { 
    method:'GET',
    headers
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(data =>
        dispatch(fetchQuestionSuccess(data))
    ).catch(err =>
        dispatch(fetchQuestionError(err))
    );
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
    question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
    type: FETCH_QUESTION_ERROR,
    error
});


