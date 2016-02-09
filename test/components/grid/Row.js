import React from 'react';
import Test from 'blue-tape';
import TestUtils from 'react-addons-test-utils';
import Row from 'lib/components/grid/Row';

const shallowRenderer = TestUtils.createRenderer();

Test('Row', t => {

  shallowRenderer.render(<Row />);
  const component = shallowRenderer.getRenderOutput();

  t.ok(TestUtils.isElement(component), 'is a react element');
  t.equals(component.props.flow, 'row wrap', 'should set the flow prop correctly');
  t.end();
});
