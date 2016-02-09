import React, { Component, PropTypes } from 'react';
import Layout from '../Layout';

function getFlexBasis (size) {
  return Math.round(100000 / 12 * size) / 1000;
}

function getStyles (flexBasis, style) {
  return Object.assign({
    margin: '0 12px',
    maxWidth: `${flexBasis}%`
  }, style);
}

export default class Col extends Component {

  static propTypes = {
    size: PropTypes.number,
    style: PropTypes.string
  };

  static defaultProps = {
    size: 12
  };

  render () {
    const { size, style, ...other } = this.props;

    const flexBasis = getFlexBasis(size);

    const styles = getStyles(flexBasis, style);

    return (
      <Layout
        alignSelf="stretch"
        flex={flexBasis}
        grow
        style={styles}
        {...other}
      />
    );
  }
}