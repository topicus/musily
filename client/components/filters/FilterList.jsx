import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import Filter from './Filter';
import { addFilter } from '../../actions/filters';

const FilterList = ({ sheet, filters, addFilter}) => (
  <div className={sheet.classes.filters}>
    {filters.map((filter, index) => (
      <form key={`form-${index}`} className="form-inline">
        <Filter
          key={`filter-${index}`}
          filter={filter}
          />
      </form>
    ))}
    <button className="btn btn-default" onClick={addFilter.bind(this)}>Add filter</button>
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