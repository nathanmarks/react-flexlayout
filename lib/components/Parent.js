import React from 'react';
import createParent from './hoc/parent';

/**
 * Parent
 */
const Parent = createParent(props => <div {...props} />);

Parent.defaultProps = {
  flow: 'row'
};

export default Parent;

