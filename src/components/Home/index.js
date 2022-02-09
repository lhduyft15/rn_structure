import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeContainer from './HomeContainer';

import {changeCount} from '../../store/actions';

const mapStateToProps = state => ({
  count: state.count.count,
});

const mapDispatchToProps = dispatch => ({
  changeCount: payload => dispatch(changeCount(payload)),
});

class Home extends Component {
  render() {
    return <HomeContainer {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
