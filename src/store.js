import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import scoringReducer from './reducers/scoring';
// import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth';


import questionReducer from './reducers/question';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        // protectedData: protectedDataReducer,
        question: questionReducer,
        scoring: scoringReducer,
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
