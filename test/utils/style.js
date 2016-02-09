import Test from 'blue-tape';
import { createStyleFromProps } from 'lib/utils/style';

Test('Creating style objects from prop: align', t => {

  t.deepEquals(createStyleFromProps({
    align: 'start'
  }), {
    display: 'flex',
    justifyContent: 'flex-start'
  });

  t.deepEquals(createStyleFromProps({
    align: 'end'
  }), {
    display: 'flex',
    justifyContent: 'flex-end'
  });

  t.deepEquals(createStyleFromProps({
    align: 'start end'
  }), {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  });

  t.deepEquals(createStyleFromProps({
    align: 'space-between center'
  }), {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  });

  t.end();
});

Test('Creating style objects from prop: alignContent', t => {

  t.deepEquals(createStyleFromProps({
    alignContent: 'start'
  }), {
    display: 'flex',
    alignContent: 'flex-start'
  });

  t.deepEquals(createStyleFromProps({
    alignContent: 'end'
  }), {
    display: 'flex',
    alignContent: 'flex-end'
  });

  t.deepEquals(createStyleFromProps({
    alignContent: 'center'
  }), {
    display: 'flex',
    alignContent: 'center'
  });

  t.end();
});

Test('Creating style objects from prop: flow', t => {

  t.deepEquals(createStyleFromProps({
    flow: 'row-reverse wrap'
  }), {
    display: 'flex',
    flexFlow: 'row-reverse wrap'
  });

  t.deepEquals(createStyleFromProps({
    flow: 'column'
  }), {
    display: 'flex',
    flexFlow: 'column'
  });

  t.end();
});

Test('Creating style objects from prop: inline', t => {

  t.deepEquals(createStyleFromProps({
    inline: false
  }), {
    display: 'flex'
  });

  t.deepEquals(createStyleFromProps({
    inline: true
  }), {
    display: 'inline-flex'
  });

  t.end();
});

Test('Creating style objects from prop: flex', t => {

  t.deepEquals(createStyleFromProps({
    flex: true
  }), {
    flex: '0 1 auto'
  }, 'should create flex shorthand from boolean value');

  t.deepEquals(createStyleFromProps({
    flex: false
  }), {
    flex: '0 0 auto'
  }, 'should create flex shorthand from boolean value');

  t.deepEquals(createStyleFromProps({
    flex: 32
  }), {
    flex: '0 1 32%'
  }, 'should convert a number to % for flex-basis in shorthand');

  t.deepEquals(createStyleFromProps({
    flex: '5 2 auto'
  }), {
    flex: '5 2 auto'
  }, 'should pass through other string values');

  t.end();
});
