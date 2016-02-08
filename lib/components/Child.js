import React from 'react';
import createChild from './hoc/child';

/**
 * Child
 */
const Child = createChild(props => <div {...props} />);

Child.defaultProps = {
  flex: true
};

export default Child;

