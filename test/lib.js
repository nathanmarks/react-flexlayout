import Test from 'blue-tape';
import { flexLayout } from 'lib/index.js';

Test('react-flexlayout', t => {
  t.ok(flexLayout, 'core hoc should exist');
  t.end();
});
