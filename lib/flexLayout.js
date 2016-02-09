import React from 'react';
import config from './config';

export default function flexLayout (Component) {

  return React.createClass({

    childContextTypes: {
      flexLayout: React.PropTypes.object
    },

    getChildContext () {
      return {
        flexLayout: config
      };
    },

    render () {
      return React.createElement(Component, this.props);
    }

  });

}
