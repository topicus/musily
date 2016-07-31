import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import {
  FIELDS, 
  FILTER_TYPES, 
  FILTER_TYPE_VALUE, 
  FILTER_TYPE_RANGE, 
  COMPARATORS
} from '../../constants/filters';

import { 
  changeFilterType, 
  changeFilterValue, 
  changeFilterField, 
  changeFilterOperator,
  deleteFilter
} from '../../actions/filters';

const Filter = ({ sheet, filter, changeFilterType, changeFilterOperator, changeFilterField, changeFilterValue, deleteFilter}) => {
  let inputs, cmps, minInput, maxInput;
  if(filter.filterType === FILTER_TYPE_RANGE) {
    inputs = <span>
      <input 
        className="form-control" 
        type="text"
        ref={(node) => {
          minInput = node
        }}
        size="5"
        placeholder="Min."
        value={(filter.value) ? filter.value[0] : ''}
        onChange={(e) => changeFilterValue([e.target.value, maxInput.value], filter.filterIndex)}
        />
      <input 
        className="form-control" 
        type="text"
        ref={(node) => {
          maxInput = node
        }}
        size="5"
        placeholder="Max."
        value={(filter.value) ? filter.value[1] : ''}
        onChange={(e) => changeFilterValue([minInput.value, e.target.value], filter.filterIndex)}
        />        
    </span>;
  } else {
    inputs = (
      <span>
        <input 
          onChange={(e) => changeFilterValue(e.target.value, filter.filterIndex)}
          className="form-control" 
          type="text"
          size="5"
          placeholder="Value"
          value={filter.value || ''}/>
      </span>
    );
    cmps = (
      <select className="form-control" onChange={(e) => changeFilterOperator(e.target.value, filter.filterIndex)} value={filter.operator || ''}>
        {COMPARATORS.map((option, index) => (
          <option key={`option-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
  return (
    <div className={sheet.classes.filter}>
      <div className="form-group">
        <select className="form-control" onChange={(e) => changeFilterField(e.target.value, filter.filterIndex)} value={filter.field || ''}>
          {Object.keys(FIELDS).map((option, index) => (
            <option key={`option-${index}`} value={option}>
              {FIELDS[option]['label']}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <select className="form-control" onChange={(e) => changeFilterType(e.target.value, filter.filterIndex)} value={filter.filterType || ''}>
          {FILTER_TYPES.map((option, index) => (
            <option key={`option-${index}`} value={option}>
              {option}
            </option>
          ))}
        </select>    
      </div>      
      <div className="form-group">
        {cmps}
      </div>
      <div className="form-group">
        {inputs}
      </div>
      <div className="form-group">
        <a onClick={ (e) => { deleteFilter(filter.filterIndex) }} className="glyphicon glyphicon-remove"></a>
      </div>
    </div>
  )
};

const STYLES = {};

export default connect(
  (state, ownProps) => ({fields: state.fields}),
  {
    changeFilterType,
    changeFilterField,
    changeFilterOperator,
    changeFilterValue,
    deleteFilter
  }
)(
  useSheet(Filter, STYLES)
);