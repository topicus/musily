import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import Group from './Group'
import FilterList from '../filters/FilterList'
import { addGroup } from '../../actions/groups';

const GroupFrom = ({ sheet, addGroup}) => {
  // let input;
  //     <input ref={node => {
  //       input = node;
  //     }}/>

  return (
    <div className={sheet.classes.groupForm}>
      <FilterList />
      <button onClick={() => addGroup()}>Add group</button>
    </div>
  );
};

const STYLES = {
  groupForm: {
    margin: '10px',
  },
};

export default connect(
  state => state,
  {addGroup}
)(
  useSheet(GroupFrom, STYLES)
);