import {combineReducers} from 'redux';
import commentsReducer from './commentsReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    commentsReducer : commentsReducer,
    AuthReducer : AuthReducer
});
