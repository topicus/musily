import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import Filter from './Filter';
import { addFilter } from '../../actions/filters';

const FilterList = ({ sheet, filters, addFilter}) => (
  <div className={sheet.classes.filters}>
    <div>Filters</div>
    {filters.map((filter, index) => (
      <Filter
        key={`filter-${index}`}
        filter={Object.assign({filterIndex: index}, filter)}
        />
    ))}
    <button onClick={addFilter.bind(this)}>Add filter</button>
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