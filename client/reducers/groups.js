import * as actionTypes from '../actionTypes/groups';

const DEFAULT_STATE = []

const addGroup = (state, action)  => ([
  ...state,
  action.group
]);

export default function groups(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.ADD_GROUP_SUCCESS]: addGroup,
  }[action.type] || (s => s))(state, action);  
}
