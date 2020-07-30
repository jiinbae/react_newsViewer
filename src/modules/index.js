import { combineReducers } from 'redux';
import newsReduxRefac from './NewsReduxRefac';
import sample from './sample';

const rootReducer = combineReducers({
    newsReduxRefac,
    sample
});

export default rootReducer;