import * as actionTypes from '../actionTypes/groups';

const DEFAULT_STATE = [];

const addGroup = (state, action) => ([
  ...state,
  action.group
]);

const requestGroup = (state, action) => ([
  ...state,
  ...action.group
]);

export default function groups(state = DEFAULT_STATE, action) {
  // return ({
  //   [actionTypes.ADD_GROUP_SUCCESS]: addGroup,
  //   [actionTypes.REQUEST_GROUP_SUCCESS]: requestGroup,
  // }[action.type] || (s => s))(state, action);
  return state
}
