import React from 'react';

export default function flexLayout (Component) {

  return React.createClass({

    childContextTypes: {
      flexLayout: React.PropTypes.object
    },

    getChildContext () {
      return {
        flexLayout: {
          foo: 'bar'
        }
      };
    },

    render () {
      return React.createElement(Component, this.props);
    }

  });

}
