
// import {API_BASE_URL} from '../config'; 

// export const fetchQuestion = () => dispatch => {
//     dispatch(fetchQuestionRequest());
//     return fetch(`${API_BASE_URL}/question`).then(res => {
//         if (!res.ok) {
//             throw new Error(res.statusText);
//         }
//         return res.json()
//     }).then(data =>
//         dispatch(fetchQuestionSuccess(data))
//     ).catch(err =>
//         dispatch(fetchQuestionError(err))
//     );
// };

// export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
// export const fetchSubtopicsRequest = () => ({
//     //handleSuccess
//     type: FETCH_SUBTOPICS_REQUEST
// });

// export const FETCH_SUBTOPICS_SUCCESS = 'FETCH_SUBTOPICS_SUCCESS';
// export const fetchSubtopicsSuccess = (subtopics) => ({
//     //handleSuccess
//     type: FETCH_SUBTOPICS_SUCCESS,
//     subtopics
// });

// export const FETCH_SUBTOPICS_ERROR = 'FETCH_SUBTOPICS_ERROR';
// export const fetchSubtopicsError = error => ({
//     type: FETCH_SUBTOPICS_ERROR,
//     error
// });



// export const SET_TOPICID_SUCCESS = 'SET_TOPICID_SUCCESS';
// export const setTopicId = topicId => ({  
//     type: SET_TOPICID_SUCCESS,
//     topicId
    
// });