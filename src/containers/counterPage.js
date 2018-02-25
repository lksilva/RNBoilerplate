import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

class CounterPage extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
  }

  render() {
    return(
      <View> 
        <Counter counter={this.props.counter} increment={this.props.increment} decrement={this.props.decrement} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter
})

const mapDispatchToProps = dispatch => (bindActionCreators(CounterActions, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);