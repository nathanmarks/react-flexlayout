import React, {Component, PropTypes} from 'react';
import Perf from 'react-addons-perf';

window.Perf = Perf;

export default class PerfTest extends Component {

  static propTypes = {
    children: PropTypes.any,
    loops: PropTypes.number,
    onComplete: PropTypes.func,
    testFn: PropTypes.func,
    testProp: PropTypes.string
  };

  static defaultProps = {
    loops: 100
  };

  componentWillMount () {
    this.setTestProp();
  }

  componentDidMount () {
    this.runTest().then(() => this.endTest());
  }

  setTestProp (cb = () => {}) {
    const {testProp, testFn} = this.props;
    this.setState({
      [testProp]: testFn()
    }, cb);
  }

  runTest () {
    let i = 0;
    Perf.start();
    return new Promise(resolve => {
      const execTest = () => {
        i++;
        setTimeout(() => {
          if (i < this.props.loops) {
            this.setTestProp(execTest);
          } else {
            Perf.stop();
            resolve(Perf);
          }
        }, 10);
      };
      execTest();
    });
  }

  endTest () {
    const measurements = Perf.getLastMeasurements();
    const summary = Perf.getMeasurementsSummaryMap(measurements);

    return this.props.onComplete(summary);
  }

  render () {
    const { children, testProp } = this.props;
    const testValue = this.state[testProp];

    return React.cloneElement(children, {
      [testProp]: testValue
    });
  }
}
