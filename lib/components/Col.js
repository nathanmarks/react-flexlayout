import React, { PropTypes } from 'react';
import Layout from './Layout';

const getFlexBasis = size => {
  return Math.floor(100000 / 12 * size) / 1000;
};

export default function Col ({ size, style, ...other }) {
  const flexBasis = getFlexBasis(size);
  const styles = {
    margin: '0 12px',
    maxWidth: `calc(${flexBasis}% - 24px)`
  };

  return (
    <Layout
      alignSelf="stretch"
      flex={`calc(${flexBasis}% - 24px)`}
      grow
      style={style ? Object.assign(styles, style) : styles}
      {...other}
    />
  );
}

Col.propTypes = {
  size: PropTypes.number,
  style: PropTypes.string
};

Col.defaultProps = {
  size: 12
};
