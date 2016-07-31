import React, { Component } from 'react';
import useSheet from 'react-jss';
import GroupList from '../components/groups/GroupList';
import Graph from '../components/visualizations/Graph';
import { connect } from 'react-redux';
import { addGroup } from '../actions/groups';

class Index extends Component {
  componentDidMount() {
    this.props.addGroup([{filterType: 'value', field:'canciones', operator: 'lte', value: '200'}]);
  }

  render() {
    const { sheet } = this.props;

    return (
      <div className={sheet.classes.flexSplit}>
        <div className={sheet.classes.flexSplitLeft}>
          <GroupList />  
        </div>
        <div className={sheet.classes.flexSplitRight}>
          <Graph />
        </div>
      </div>
    );
  }
}

const STYLES = {
  flexSplit: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    position:'relative',
    minHeight:'100vh',
  },
  flexSplitLeft: {
    width: '30%',
    backgroundColor: '#e9e9e9',
    overflowY: 'auto',
    maxHeight:'100vh',
  },
  flexSplitRight: {
    width: '70%',
  }  
};

Index = connect(
  state => state,
  { addGroup }
)(
  useSheet(Index, STYLES)
);

export default Index;