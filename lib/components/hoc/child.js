import React, { PropTypes, Component } from 'react';
import * as CustomPropTypes from '../../utils/customPropTypes';
import { createStyleFromProps } from '../../utils/style';

/**
 * Hoc
 */
export default function child (ComposedComponent) {

  return class LayoutChild extends Component {

    static propTypes = {

      /**
       * This aligns flex items of the current flex line
       * overriding the align-items value
       */
      alignSelf: CustomPropTypes.crossAxisAlignment,

      /**
       * Sets values to determine the space the layout component occupies.
       *
       * @val {bool} true Equivalent to browser initial values. Same as `flex="auto"`.
       * @val {bool} false Will not grow or shrink. Same as `flex="auto" shrink={0}`.
       * @val {number} 0..100 Will start with size of n%. Shortcut for setting `flex-basis` as a %.
       * @val {string} "[flex-grow] [flex-shrink] [flex-basis]" Passes through flex shorthand styling.
       */
      flex: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string
      ]),

      /**
       * Sets the `flex-grow` behaviour.
       */
      grow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
      ]),

      /**
       * Sets the `flex-shrink` behaviour.
       */
      shrink: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
      ]),

      /**
       * Inline styles to merge/override, last in wins
       */
      style: PropTypes.object

    };

    static defaultProps = {
      flex: true
    };

    render () {
      const {
        alignSelf,
        flex,
        grow,
        shrink,
        style,
        ...other
      } = this.props;

      const styles = createStyleFromProps({ alignSelf, flex, grow, shrink });

      if (style) {
        Object.assign(styles, style);
      }

      return React.createElement(ComposedComponent, { style: styles, ...other });
    }

  };
}
