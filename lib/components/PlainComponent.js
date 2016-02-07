import React, { Component } from 'react';

export default class PlainComponent extends Component {

  render () {
    return <div {...this.props} />;
  }
}
