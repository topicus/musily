import * as actionTypes from '../actionTypes/filters';

const DEFAULT_STATE = []

const addFilter = (state, action)  => ([
  ...state,
  action.filter
]);

const changeFilterType = (state, action)  => {
  let filterType = action.filterType;
  let filter = Object.assign({}, state[action.filterIndex], {filterType});
  return [
    ...state.slice(0, action.filterIndex),
    filter,
    ...state.slice(action.filterIndex + 1)
  ]
};

export default function filters(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.ADD_FILTER]: addFilter,
    [actionTypes.CHANGE_FILTER_TYPE]: changeFilterType,
  }[action.type] || (s => s))(state, action);  
}
