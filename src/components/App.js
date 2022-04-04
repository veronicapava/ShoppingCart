import { connect } from 'react-redux'
import React, { Component } from 'react';
import { _getPhones } from '../utils/_DATA'
import { receivePhones } from '../actions/phones'
import Container from './Container'


class App extends Component {
  componentDidMount() {
    _getPhones()
      .then((phones) => {
        this.props.dispatch(receivePhones(phones))
      })
  }
  render() {
    const { phones } = this.props

    return (
      <Container phones={phones} />
    );
  }
}

function mapStateToProps({ phones }) {
  return {
    phones
  }
}

export default connect(mapStateToProps)(App);
