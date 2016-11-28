import * as types from '../actionTypes/actionTypes';

export function beginAjaxCall() {
  return {type: types.BEGIN_AJAX_CALL};
}

export function ajaxCallSuccess() {
  return {type: types.AJAX_CALL_SUCCESS};
}