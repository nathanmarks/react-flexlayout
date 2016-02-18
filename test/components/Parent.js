import React from 'react';
import Test from 'blue-tape';
import TestUtils from 'react-addons-test-utils';
import ParentLayout from 'lib/components/Layout';

const shallowRenderer = TestUtils.createRenderer();

Test('ParentLayout', t => {

  shallowRenderer.render(<ParentLayout />);
  const component = shallowRenderer.getRenderOutput();

  t.ok(TestUtils.isElement(component), 'is a react element');
  t.end();
});

Test('ParentLayout - Various Props', t => {

  const child = <h1>Hello World</h1>;

  shallowRenderer.render(
    <ParentLayout
      align="start center"
      flow="column"
      style={{
        backgroundColor: 'red'
      }}
    >
      {child}
    </ParentLayout>
  );

  const component = shallowRenderer.getRenderOutput();

  t.equals(component.props.style.display, 'flex', 'should set the display property');
  t.equals(component.props.style.flexFlow, 'column', 'should set the flexFlow property');
  t.equals(component.props.style.justifyContent, 'flex-start', 'should set the justifyContent property');
  t.equals(component.props.style.alignItems, 'center', 'should set the alignItems property');

  t.equals(component.props.style.backgroundColor, 'red', 'should merge styles');
  t.equals(component.props.children, child, 'should pass the child through');

  t.end();
});
