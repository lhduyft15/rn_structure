import React, {Component} from 'react';
import {connect} from 'react-redux';
import DetailsContainer from './DetailsContainer';

import {changeCount} from '../../store/actions';

const mapStateToProps = state => ({
  count: state.count.count,
});

const mapDispatchToProps = dispatch => ({
  changeCount: payload => dispatch(changeCount(payload)),
});

class Details extends Component {
  render() {
    return <DetailsContainer {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
