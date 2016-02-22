import React, { Component } from 'react';
import Typography from '../utils/typography';
import RandomWords from 'random-words';
import Grid from './Grid';
import PerfTest from './PerfTest';

export default class Intro extends Component {

  render () {

    return (
      <div>
        <h1 style={Typography.display3}>react-flexlayout</h1>

        <PerfTest
          onComplete={(wat) => {
            console.log(wat);
          }}
          testFn={() => RandomWords(1)[0]}
          testProp="value"
        >
          <Grid />
        </PerfTest>

      </div>
    );
  }
}
