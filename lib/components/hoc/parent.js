import React, { PropTypes, Component } from 'react';
import * as CustomPropTypes from '../../utils/customPropTypes';
import { createStyleFromProps } from '../../utils/style';

/**
 * Hoc
 */
export default function parent (ComposedComponent) {

  return class LayoutParent extends Component {

    static propTypes = {

      /**
       * Controls child flex alignment using `justify-content` and `align-items`.
       * The prop accepts a string with 2 (optional) parts in the following format:
       *
       * "`start|center|end|space-around|space-between` `start|center|end|stretch`"
       */
      align: CustomPropTypes.childAlignment,

      /**
       * This aligns a flex container's lines within
       * when there is extra space in the cross-axis.
       *
       * **Note:** this property has no effect
       * when there is only one line of flex items.
       */
      alignContent: CustomPropTypes.mainAxisAlignment,

      /**
       * Sets `flex-direction` and `flex-wrap`.
       *
       * @type {string}
       * @default
       */
      flow: PropTypes.string,

      /**
       * Sets the display property to `inline-flex`.
       */
      inline: PropTypes.bool,

      /**
       * Inline styles to merge/override, last in wins
       */
      style: PropTypes.object

    };

    static defaultProps = {
      inline: false
    };

    render () {
      const {
        align,
        alignContent,
        flow,
        inline,
        style,
        ...other
      } = this.props;

      const styles = createStyleFromProps({ align, alignContent, flow, inline });

      if (style) {
        Object.assign(styles, style);
      }

      return React.createElement(ComposedComponent, { style: styles, ...other });
    }

  };
}
