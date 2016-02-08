import React, { Component } from 'react';
import createChild from './hoc/child';
import createParent from './hoc/parent';

class Layout extends Component {

  render () {

    return <div {...this.props} />;
  }
}

export default createParent(createChild(Layout));
