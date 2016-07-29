import React, { Component } from 'react';
import useSheet from 'react-jss';
// import Kittens from '../components/Kittens';
import { connect } from 'react-redux';
import { requestGroup } from '../actions/groups';

class Index extends Component {
  componentDidMount() {
    this.props.requestGroup();
  }

  render() {
    const { sheet } = this.props;

    return (
      <div className={sheet.classes.index}>
      hello
      </div>
    );
  }
}

const STYLES = {
  index: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDDD',
    color: '#660000'
  }
};

Index = connect(
  () => ({}),
  { requestGroup }
)(
  useSheet(Index, STYLES)
);

export default Index;