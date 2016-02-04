import Test from 'blue-tape';
import ReactFlx from 'lib/index.js';

Test('Module', t => {

  t.ok(ReactFlx, 'Should exist');

  t.equals(typeof ReactFlx.setDefaults, 'function', 'should have a function to set the defaults')

  t.end();

});
