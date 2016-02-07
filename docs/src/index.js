import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Docs from './components/Docs';

injectTapEventPlugin();

ReactDOM.render(
  <Docs />,
  document.getElementById('root')
);
