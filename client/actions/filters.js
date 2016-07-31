import * as actionTypes from '../actionTypes/filters';

export function addFilter() {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_FILTER,
    });
  } 
}

export function changeFilterType(filterType, filterIndex) {
  return dispatch => {
    dispatch({
      type: actionTypes.CHANGE_FILTER_TYPE,
      filterType: filterType,
      filterIndex: filterIndex,
    });
  } 
}

export function changeFilterValue(value, filterIndex) {
  return dispatch => {
    dispatch({
      type: actionTypes.CHANGE_FILTER_VALUE,
      value: value,
      filterIndex: filterIndex,
    });
  } 
}


export function changeFilterField(field, filterIndex) {
  return dispatch => {
    dispatch({
      type: actionTypes.CHANGE_FILTER_FIELD,
      field: field,
      filterIndex: filterIndex,
    });
  } 
}


export function changeFilterOperator(operator, filterIndex) {
  return dispatch => {
    dispatch({
      type: actionTypes.CHANGE_FILTER_OPERATOR,
      operator: operator,
      filterIndex: filterIndex,
    });
  } 
}

export function resetFilters() {
  return dispatch => {
    dispatch({
      type: actionTypes.RESET_FILTERS
    });
  } 
}

export function deleteFilter(filterIndex) {
  return dispatch => {
    dispatch({
      type: actionTypes.DELETE_FILTER,
      filterIndex
    });
  } 
}