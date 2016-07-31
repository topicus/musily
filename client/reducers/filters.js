import * as actionTypes from '../actionTypes/filters';
import {
  FILTER_TYPE_RANGE
} from '../constants/filters';

const DEFAULT_STATE = [];
const DEFAULT_FILTER = {filterType: 'value', field: 'sexo', 'operator': 'eq'};

const updateFilter = (filter, index, state) => {
  return [
    ...state.slice(0, index),
    filter,
    ...state.slice(index + 1)
  ]  
}

const addFilter = (state, action)  => {
  let filter = Object.assign({filterIndex: state.length}, DEFAULT_FILTER);
  return [
    ...state,
    filter
  ]
};

const changeFilterType = (state, action)  => {
  let filterType = action.filterType;
  let operator = (filterType === FILTER_TYPE_RANGE) ? 'between' : null;
  let filter = Object.assign({}, state[action.filterIndex], {filterType, operator});
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

const deleteFilter = (state, action)  => {
  let filters = state.filter(f => f.filterIndex != action.filterIndex);
  console.log(filters);
  return filters.map( (filter, index) => Object.assign({}, filter, {filterIndex: index}));
};

export default function filters(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.ADD_FILTER]: addFilter,    
    [actionTypes.CHANGE_FILTER_TYPE]: changeFilterType,
    [actionTypes.CHANGE_FILTER_OPERATOR]: changeFilterOperator,
    [actionTypes.CHANGE_FILTER_FIELD]: changeFilterField,
    [actionTypes.CHANGE_FILTER_VALUE]: changeFilterValue,
    [actionTypes.RESET_FILTERS]: resetFilters,
    [actionTypes.DELETE_FILTER]: deleteFilter
  }[action.type] || (s => s))(state, action);  
}
