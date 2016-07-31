import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { 
  changeFilterType, 
  changeFilterValue, 
  changeFilterField, 
  changeFilterOperator
} from '../../actions/filters';

const FILTER_TYPES = ['value', 'range'];
const comparators = ['eq', 'gt', 'lt', 'gte', 'lte'];

const Filter = ({ sheet, filter, fields, changeFilterType }) => {
  let inputs, cmps, minInput, maxInput;
  if(filter.filterType === 'range') {
    inputs = <span>
      <input 
        className={sheet.classes.input} 
        type="text"
        ref={(node) => {
          minInput = node
        }}
        defaultValue={(filter.value) ? filter.value[0] : ''}
        onChange={(e) => changeFilterValue([e.target.value, maxInput.value], filter.filterIndex)}
        />
      <input 
        className={sheet.classes.input} 
        type="text"
        ref={(node) => {
          maxInput = node
        }}
        defaultValue={(filter.value) ? filter.value[1] : ''}
        onChange={(e) => changeFilterValue([minInput.value, e.target.value], filter.filterIndex)}
        />        
    </span>;
  } else {
    inputs = (
      <span>
        <input 
          onChange={(e) => changeFilterValue(e.target.value, filter.filterIndex)}
          className={sheet.classes.input} 
          type="text" 
          defaultValue={filter.value}/>
      </span>
    );
    cmps = (
      <select onChange={(e) => changeFilterOperator(e.target.value, filter.filterIndex)} defaultValue={filter.operator}>
        {comparators.map((option, index) => (
          <option key={`option-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
  return (
    <div className={sheet.classes.filter}>
      <select onChange={(e) => changeFilterType(e.target.value, filter.filterIndex)} defaultValue={filter.filterType}>
        {FILTER_TYPES.map((option, index) => (
          <option key={`option-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
      {cmps}
      <select onChange={(e) => changeFilterField(e.target.value, filter.filterIndex)} defaultValue={filter.field}>
        {fields.map((option, index) => (
          <option key={`option-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
      {inputs}
    </div>
  )
};

const STYLES = {
  input: {
    width: '30px'
  },
};

export default connect(
  (state, ownProps) => ({fields: state.fields || ['sexo', 'edad']}),
  {changeFilterType}
)(
  useSheet(Filter, STYLES)
);