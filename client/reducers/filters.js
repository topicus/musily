import * as actionTypes from '../actionTypes/filters';

const DEFAULT_STATE = [];
const DEFAULT_FILTER = {filterType: 'value', field: 'sexo', 'operator': 'eq'};

const updateFilter = (filter, index, state) => {
  return [
    ...state.slice(0, index),
    filter,
    ...state.slice(index + 1)
  ]  
}

const addFilter = (state, action)  => ([
  ...state,
  DEFAULT_FILTER
]);

const changeFilterType = (state, action)  => {
  let filterType = action.filterType;
  let filter = Object.assign({}, state[action.filterIndex], {filterType});
  return updateFilter(filter, action.filterIndex, state);
};

const changeFilterValue = (state, action)  => {
  let value = action.value;
  let filter = Object.assign({}, state[action.filterIndex], {value});
  return updateFilter(filter, action.filterIndex, state);
};

const changeFilterOperator = (state, action)  => {
  console.log(action);
  let operator = action.operator;
  let filter = Object.assign({}, state[action.filterIndex], {operator});
  return updateFilter(filter, action.filterIndex, state);
};

const changeFilterField = (state, action)  => {
  let field = action.field;
  let filter = Object.assign({}, state[action.filterIndex], {field});
  return updateFilter(filter, action.filterIndex, state);
};

const resetFilters = (state, action)  => {
  return []
};

export default function filters(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.ADD_FILTER]: addFilter,    
    [actionTypes.CHANGE_FILTER_TYPE]: changeFilterType,
    [actionTypes.CHANGE_FILTER_OPERATOR]: changeFilterOperator,
    [actionTypes.CHANGE_FILTER_FIELD]: changeFilterField,
    [actionTypes.CHANGE_FILTER_VALUE]: changeFilterValue,
    [actionTypes.RESET_FILTERS]: resetFilters
  }[action.type] || (s => s))(state, action);  
}
