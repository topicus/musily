import * as actionTypes from '../actionTypes/groups';
import * as filterActionTypes from '../actionTypes/filters';
import { get, serialize_filters} from '../utils/api';

export function addGroup(filters) {
  let url_filters = serialize_filters(filters);
  return async dispatch => {
    dispatch({
      type: actionTypes.ADD_GROUP
    });
    dispatch({
      type: filterActionTypes.RESET_FILTERS
    });
    try {
      const result = await get('/filter' + url_filters);
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