import * as actionTypes from '../actionTypes/filters';

export function addFilter(filter) {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_FILTER,
      filter: filter
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