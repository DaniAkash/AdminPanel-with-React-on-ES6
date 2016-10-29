import {combineReducers} from 'react';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;