import React from 'react';
import Layout from './Layout';

export default function Row ({ style, ...other }) {

  const styles = {
    margin: '0 -12px'
  };

  return (
    <Layout
      flex="100"
      align="start start"
      alignContent="start"
      alignSelf="stretch"
      flow="row wrap"
      style={style ? Object.assign(styles, style) : styles}
      {...other}
    />
  );
}
