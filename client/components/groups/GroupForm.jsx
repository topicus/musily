import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import Group from './Group'
import FilterList from '../filters/FilterList'
import { addGroup } from '../../actions/groups';

const GroupFrom = ({ sheet, filters, fields, addGroup}) => {
  return (
    <div className={sheet.classes.groupForm}>
      <FilterList />
      <button className="btn btn-primary" onClick={addGroup.bind(this, filters)}>Create group</button>
    </div>
  );
};

const STYLES = {
  groupForm: {
    margin: '10px',
  },
};

export default connect(
  state => ({filters: state.filters}),
  {addGroup}
)(
  useSheet(GroupFrom, STYLES)
);