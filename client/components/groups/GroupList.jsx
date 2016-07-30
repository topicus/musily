import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import Group from './Group'
import GroupForm from './GroupForm'
// import { addGroup } from '../../actions/groups';

const GroupList = ({ sheet, groups, filters}) => (
  <div className={sheet.classes.groups}>
    <GroupForm filters={filters}/>
    {groups.map((group, index) => (
      <Group
        key={`group-${index}`}
        group={group}
        />
    ))}
  </div>
);

const STYLES = {
  groups: {
    margin: '10px',
  },
};

export default connect(
  state => ({ groups: state.groups, filters: state.filters }),
  {}
)(
  useSheet(GroupList, STYLES)
);