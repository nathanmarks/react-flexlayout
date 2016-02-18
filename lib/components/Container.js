import React, { PropTypes } from 'react';
import Layout from './Layout';

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
    <Layout
      align="center start"
      style={Object.assign({}, style, outerStyle)}
      {...other}
    >
      <Layout flex={100} style={innerStyle}>
        {children}
      </Layout>
    </Layout>
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
