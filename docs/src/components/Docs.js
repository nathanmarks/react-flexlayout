import React, { Component } from 'react';
import MuiTheme from '../utils/muiTheme';
import Typography from '../utils/typography';
import Intro from './Intro';
import Container from '../../../dist/components/Container';

class Docs extends Component {

  render () {

    return (
      <Container>
        <Intro />
      </Container>
    );
  }
}

export default MuiTheme(Docs);
