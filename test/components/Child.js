import React from 'react';
import Test from 'blue-tape';
import TestUtils from 'react-addons-test-utils';
import Child from 'lib/components/Child';

const shallowRenderer = TestUtils.createRenderer();

Test('Child', t => {

  shallowRenderer.render(<Child />);
  const component = shallowRenderer.getRenderOutput();
  t.ok(TestUtils.isElement(component), 'is a react element');
  t.equals(component.props.style.flex, '0 1 auto', 'has default flex styles');
  t.end();
});

Test('Child - Various Props', t => {

  const child = <h1>Hello World</h1>;

  shallowRenderer.render(
    <Child
      flex={false}
      style={{
        backgroundColor: 'red'
      }}
    >
      {child}
    </Child>
  );

  const component = shallowRenderer.getRenderOutput();
  const { children, style } = component.props;

  t.equals(style.flex, '0 0 auto', 'should set the flex shorthand');
  t.equals(style.backgroundColor, 'red', 'should merge styles');
  t.equals(children, child, 'should pass the child through');

  t.end();
});

Test('Child - Overriding flex-grow shorthand', t => {

  shallowRenderer.render(
    <Child
      flex
      grow={4}
    />
  );

  const component = shallowRenderer.getRenderOutput();
  const { style } = component.props;

  t.equals(style.flex, '4 1 auto', 'should override the flex shorthand correctly');
  t.end();
});

Test('Child - Overriding flex-shrink shorthand', t => {

  shallowRenderer.render(
    <Child
      flex
      shrink={0}
    />
  );

  const component = shallowRenderer.getRenderOutput();
  const { style } = component.props;

  t.equals(style.flex, '0 0 auto', 'should override the flex shorthand correctly');
  t.end();
});

Test('Child - Overriding flex-grow, flex-shrink, and flex-basis shorthand', t => {

  shallowRenderer.render(
    <Child
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

Test('Child - Flex shorthand explicit shortcut', t => {

  shallowRenderer.render(
    <Child
      flex="3 2 50%"
    />
  );

  const component = shallowRenderer.getRenderOutput();
  const { style } = component.props;

  t.equals(style.flex, '3 2 50%', 'should pass through the flex shorthand correctly');
  t.end();
});

Test('Child - Overriding explicit shortcut with props', t => {

  shallowRenderer.render(
    <Child
      flex="0 3 auto"
      grow
    />
  );

  const component = shallowRenderer.getRenderOutput();
  const { style } = component.props;

  t.equals(style.flex, '0 3 auto', 'should not override the flex shorthand');
  t.end();
});
