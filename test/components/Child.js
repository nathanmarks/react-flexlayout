import React from 'react';
import Test from 'blue-tape';
import TestUtils from 'react-addons-test-utils';
import ChildLayout from 'lib/components/Layout';

const shallowRenderer = TestUtils.createRenderer();

Test('ChildLayout', t => {

  shallowRenderer.render(<ChildLayout />);
  const component = shallowRenderer.getRenderOutput();
  t.ok(TestUtils.isElement(component), 'is a react element');
  t.end();
});

Test('ChildLayout - Various Props', t => {

  const child = <h1>Hello World</h1>;

  shallowRenderer.render(
    <ChildLayout
      flex={false}
      style={{
        backgroundColor: 'red'
      }}
    >
      {child}
    </ChildLayout>
  );

  const component = shallowRenderer.getRenderOutput();
  const { children, style } = component.props;

  t.equals(style.flex, '0 0 auto', 'should set the flex shorthand');
  t.equals(style.backgroundColor, 'red', 'should merge styles');
  t.equals(children, child, 'should pass the child through');

  t.end();
});

Test('ChildLayout - Overriding flex-grow shorthand', t => {

  shallowRenderer.render(
    <ChildLayout
      flex
      grow={4}
    />
  );

  const component = shallowRenderer.getRenderOutput();
  const { style } = component.props;

  t.equals(style.flex, '4 1 auto', 'should override the flex shorthand correctly');
  t.end();
});

Test('ChildLayout - Overriding flex-shrink shorthand', t => {

  shallowRenderer.render(
    <ChildLayout
      flex
      shrink={0}
    />
  );

  const component = shallowRenderer.getRenderOutput();
  const { style } = component.props;

  t.equals(style.flex, '0 0 auto', 'should override the flex shorthand correctly');
  t.end();
});

Test('ChildLayout - Overriding flex-grow, flex-shrink, and flex-basis shorthand', t => {

  shallowRenderer.render(
    <ChildLayout
      flex={33}
      grow
      shrink={false}
    />
  );

  const component = shallowRenderer.getRenderOutput();
  const { style } = component.props;

  t.equals(style.flex, '1 0 33%', 'should override the flex shorthand correctly');
  t.end();
});

Test('ChildLayout - Flex shorthand explicit shortcut', t => {

  shallowRenderer.render(
    <ChildLayout
      flex="3 2 50%"
    />
  );

  const component = shallowRenderer.getRenderOutput();
  const { style } = component.props;

  t.equals(style.flex, '3 2 50%', 'should pass through the flex shorthand correctly');
  t.end();
});

Test('ChildLayout - Overriding explicit shortcut with props', t => {

  shallowRenderer.render(
    <ChildLayout
      flex="0 3 auto"
      grow
    />
  );

  const component = shallowRenderer.getRenderOutput();
  const { style } = component.props;

  t.equals(style.flex, '0 3 auto', 'should not override the flex shorthand');
  t.end();
});
