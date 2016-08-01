import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import Group from './Group'
import GroupForm from './GroupForm'

const GroupList = ({ sheet, groups, filters}) => {
  return (
    <div className={sheet.classes.groups}>
      <GroupForm filters={filters}/>
      {groups.map((group, index) => (
        <Group
          key={`group-${index}`}
          group={group}
          index={index}
          />
      ))}
    </div>
  );
}

const STYLES = {
  groups: {
    margin: '10px',
  },
};

export default connect(
  state => state,
  {}
)(
  useSheet(GroupList, STYLES)
);