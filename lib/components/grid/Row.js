import React, { Component, PropTypes } from 'react';
import Layout from '../Layout';

export default class Row extends Component {

  static propTypes = {
    style: PropTypes.string
  };

  render () {
    const { style, ...other } = this.props;

    const styles = Object.assign({
      margin: '0 -12px'
    }, style);

    return (
      <Layout
        flex="100"
        align="start start"
        alignContent="start"
        alignSelf="stretch"
        flow="row wrap"
        style={styles}
        {...other}
      />
    );
  }
}
