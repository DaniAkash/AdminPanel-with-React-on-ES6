import * as types from '../actionTypes/actionTypes';

export function createCourse(course) {
  return {type: types.CREATE_COURSE, course};
}