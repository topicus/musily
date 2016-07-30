import * as actionTypes from '../actionTypes/groups';
import { get, post, del } from '../utils/api';

export function addGroup(filters) {
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