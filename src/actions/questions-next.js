
import {API_BASE_URL} from '../config'; 

export const fetchNextQuestion = (headers, memoryStrength) => (dispatch, getState)  => {
    dispatch(fetchNextQuestionRequest());
    //const username = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/questions/${memoryStrength}`, { 
    method:'PUT',
    headers
    //body: JSON.stringify(username)
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(data => {
        console.log(data);
        dispatch(fetchNextQuestionSuccess(data))
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
export const fetchNextQuestionSuccess = (question) => ({
    //handleSuccess
    type: FETCH_NEXT_QUESTION_SUCCESS,
    currentQuestion: question
});

export const FETCH_NEXT_QUESTION_ERROR = 'FETCH_NEXT_QUESTION_ERROR';
export const fetchNextQuestionError = error => ({
    type: FETCH_NEXT_QUESTION_ERROR,
    error
});


