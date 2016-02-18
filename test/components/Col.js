import React from 'react';
import Test from 'blue-tape';
import TestUtils from 'react-addons-test-utils';
import Col from 'lib/components/Col';

const shallowRenderer = TestUtils.createRenderer();

Test('Col', t => {

  shallowRenderer.render(<Col size={6} />);
  const component = shallowRenderer.getRenderOutput();

  t.ok(TestUtils.isElement(component), 'is a react element');
  t.equals(component.props.flex, 'calc(50% - 24px)', 'should set the flex prop correctly');
  t.equals(component.props.grow, true, 'should set the grow prop');
  t.end();
});
