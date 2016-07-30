import { combineReducers } from 'redux';
import groups from './groups';
import filters from './filters';

const reducers = combineReducers({
  groups,
  filters
});

export default reducers;
