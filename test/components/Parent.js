import React from 'react';
import Test from 'blue-tape';
import TestUtils from 'react-addons-test-utils';
import Parent from 'lib/components/Parent';

const shallowRenderer = TestUtils.createRenderer();

Test('Parent', t => {

  shallowRenderer.render(<Parent />);
  const component = shallowRenderer.getRenderOutput();

  t.ok(TestUtils.isElement(component), 'is a react element');
  t.equals(component.props.style.display, 'flex', 'should set the display property');
  t.end();
});

Test('Parent - Various Props', t => {

  const child = <h1>Hello World</h1>;

  shallowRenderer.render(
    <Parent
      align="start center"
      flow="column"
      style={{
        backgroundColor: 'red'
      }}
    >
      {child}
    </Parent>
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
