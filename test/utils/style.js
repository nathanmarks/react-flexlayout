import Test from 'blue-tape';
import { createStyleFromProps } from 'lib/utils/style';

Test('Creating style objects from prop: align', t => {

  t.deepEquals(createStyleFromProps({
    align: 'start'
  }), {
    justifyContent: 'flex-start'
  });

  t.deepEquals(createStyleFromProps({
    align: 'end'
  }), {
    justifyContent: 'flex-end'
  });

  t.deepEquals(createStyleFromProps({
    align: 'start end'
  }), {
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  });

  t.deepEquals(createStyleFromProps({
    align: 'space-between center'
  }), {
    justifyContent: 'space-between',
    alignItems: 'center'
  });

  t.end();
});

Test('Creating style objects from prop: alignContent', t => {

  t.deepEquals(createStyleFromProps({
    alignContent: 'start'
  }), {
    alignContent: 'flex-start'
  });

  t.deepEquals(createStyleFromProps({
    alignContent: 'end'
  }), {
    alignContent: 'flex-end'
  });

  t.deepEquals(createStyleFromProps({
    alignContent: 'center'
  }), {
    alignContent: 'center'
  });

  t.end();
});

Test('Creating style objects from prop: flow', t => {

  t.deepEquals(createStyleFromProps({
    flow: 'row-reverse wrap'
  }), {
    flexFlow: 'row-reverse wrap'
  });

  t.deepEquals(createStyleFromProps({
    flow: 'column'
  }), {
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
