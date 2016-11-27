import * as types from '../actionTypes/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {

    // case types.CREATE_COURSE:
    //   return [...state,
    //     Object.assign({}, action.course)
    //   ];

    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}