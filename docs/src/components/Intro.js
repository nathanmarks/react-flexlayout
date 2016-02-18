import React, { Component } from 'react';
import Typography from '../utils/typography';
import RandomWords from 'random-words';
import { Row, Col } from '../../../dist';

// DO NOT CHECK IN!! :)
import Perf from 'react-addons-perf';
window.Perf = Perf;

export default class Intro extends Component {

  state = {
    woof: 'meow'
  };

  componentDidMount () {
    let i = 0;

    Perf.start();

    const woof = () => {
      i++;
      setTimeout(() => {
        if (i < 100) {
          this.randomize(woof);
        } else {
          Perf.stop();
          Perf.printInclusive();
          Perf.printExclusive();
          Perf.printWasted();
        }
      }, 10);
    };

    woof();
  }

  randomize (cb) {
    this.setState({
      woof: RandomWords(1)
    }, cb);
  }

  render () {
    const { woof } = this.state;

    return (
      <div>
        <h1 style={Typography.display3}>react-flexlayout</h1>

        <Row>
          <Col size={3}>
            <button onClick={() => this.randomize()}>{woof}</button>
          </Col>
          <Col size={3}>
            <button onClick={() => this.randomize()}>{woof}</button>
          </Col>
          <Col size={6}>
            <Row onClick={() => this.randomize()}>
              <Col size={6}>YAR!</Col>
              <Col size={6}>{woof}</Col>
            </Row>
          </Col>
        </Row>

      </div>
    );
  }
}
