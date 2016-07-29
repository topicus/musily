import * as actionTypes from '../actionTypes/groups';
import { get, post, del } from '../utils/api';

export function addGroup() {
  return async dispatch => {
    dispatch({
      type: actionTypes.ADD_GROUP
    });

    try {
      const result = await get('/filter');
      dispatch({
        type: actionTypes.ADD_GROUP_SUCCESS,
        group: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.ADD_GROUP_ERROR
      });
    }
  }
}

export function requestGroup() {
  return async dispatch => {
    dispatch({
      type: actionTypes.REQUEST_GROUP
    });

    try {
      const result = await get('/filter');
      dispatch({
        type: actionTypes.REQUEST_GROUP_SUCCESS,
        group: result
      });
    } catch(e) {
      console.log(e);
      dispatch({
        type: actionTypes.REQUEST_GROUP_ERROR
      });
    }
  }
}
