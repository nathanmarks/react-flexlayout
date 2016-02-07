import Test from 'blue-tape';
import * as customPropTypes from 'lib/utils/customPropTypes';
import {
  ALIGNMENT_MAIN_AXIS,
  ALIGNMENT_CROSS_AXIS
} from 'lib/constants';
import _reduce from 'lodash/reduce';

Test('module: customPropTypes', t => {
  t.ok(customPropTypes, 'should exist');
  t.end();
});

Test('childAlignment', t => {
  const { childAlignment } = customPropTypes;

  t.ok(childAlignment, 'should exist');

  const testChildAlignment = value => {
    return childAlignment({ align: value }, 'align');
  };

  t.ok(
    testChildAlignment({}) instanceof Error,
    'should return an error for non-strings'
  );

  const falseNegatives = _reduce(ALIGNMENT_MAIN_AXIS, (result, main) => {
    let newResult = result;

    if (testChildAlignment(main) instanceof Error) {
      newResult = newResult + 1;
    }

    ALIGNMENT_CROSS_AXIS.forEach(cross => {
      if (testChildAlignment(`${main} ${cross}`) instanceof Error) {
        newResult = newResult + 1;
      }
    });

    return newResult;
  }, 0);

  t.equals(falseNegatives, 0, 'should be valid for all lib constant values');

  t.ok(
    testChildAlignment('asdsaasas') instanceof Error,
    'should return an error for invalid values'
  );

  t.end();
});


