import React, { PropTypes } from 'react';
import Child from './Child';
import Parent from './Parent';

export default function Container ({ children, gutter, maxWidth, style, ...other }) {

  const outerStyle = {
    width: '100%',
    height: '100%'
  };

  const innerStyle = {
    maxWidth: maxWidth - gutter * 2,
    paddingLeft: gutter,
    paddingRight: gutter
  };

  return (
    <Parent
      align="center start"
      style={Object.assign({}, style, outerStyle)}
      {...other}
    >
      <Child flex={100} style={innerStyle}>
        {children}
      </Child>
    </Parent>
  );
}

Container.propTypes = {
  children: PropTypes.any,
  gutter: PropTypes.number,
  maxWidth: PropTypes.number
};

Container.defaultProps = {
  gutter: 15,
  maxWidth: 1200
};
