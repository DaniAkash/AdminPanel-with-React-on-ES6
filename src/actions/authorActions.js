import * as types from '../actionTypes/actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallSuccess, ajaxCallErr} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors => {
      dispatch(ajaxCallSuccess());
      dispatch(loadAuthorsSuccess(authors));
    }).catch(err => {
      dispatch(ajaxCallErr());
      throw(err);
    });
  };
}