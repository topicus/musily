import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { changeFilterType } from '../../actions/filters';

const FILTER_TYPES = ['value', 'range'];

const Filter = ({ sheet, filter, changeFilterType }) => {
  let inputs;
  if(filter.filterType === 'range') {
    inputs = <span>
      <input className={sheet.classes.input} type="text" defaultValue={filter.value[1]}/>
      <input className={sheet.classes.input} type="text" defaultValue={filter.value[0]}/>
    </span>;
  } else {
    inputs = <span><input className={sheet.classes.input} type="text" defaultValue={filter.value}/></span>
  }
  return (
    <div className={sheet.classes.filter}>
      <select onChange={(e) => changeFilterType(e.target.value, filter.fiterIndex)} defaultValue={filter.filterType}>
        {FILTER_TYPES.map((option, index) => (
          <option key={`option-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select>
        <option value="range">Field1</option>
        <option value="saab">Field2</option>
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
  state => state,
  {changeFilterType}
)(
  useSheet(Filter, STYLES)
);