import * as types from '../actionTypes/actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallSuccess, ajaxCallErr} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(ajaxCallSuccess());
      dispatch(loadCoursesSuccess(courses));
    }).catch(err => {
      dispatch(ajaxCallErr());
      throw(err);
    });
  };
}

export function saveCourse(course) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      dispatch(ajaxCallSuccess());
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    }).catch(err => {
      dispatch(ajaxCallErr());
      throw(err);
    });
  };
}