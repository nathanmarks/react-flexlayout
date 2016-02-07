import Test from 'blue-tape';
import { createStyleFromProps } from 'lib/utils/style';

Test('Creating style objects from props', t => {

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
