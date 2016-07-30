import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import Filter from './Filter';
import { addFilter } from '../../actions/filters';

const FilterList = ({ sheet, filters, addFilter}) => (
  <div className={1}>
    <div>Filters</div>
    {filters.map((filter, index) => (
      <Filter
        key={`filter-${index}`}
        filter={Object.assign({fiterIndex: index}, filter)}
        />
    ))}
    <button onClick={() => addFilter({filterType: 'range', field: 'hola', value: [0,10]})}>Add filter</button>
  </div>
);

const STYLES = {
  filters: {},
};

export default connect(
  (state) => ({ filters: state.filters }),
  {addFilter}
)(
  useSheet(FilterList, STYLES)
);