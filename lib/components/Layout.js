import React, { PropTypes } from 'react';
import * as CustomPropTypes from '../utils/customPropTypes';
import { styleReducer as createStyleFromProps } from '../utils/style';

export const propTypes = {

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
   * Sets `flex-direction` and `flex-wrap`.
   *
   * @type {string}
   * @default
   */
  flow: PropTypes.string,

  /**
   * Sets the `flex-grow` behaviour.
   */
  grow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),

  /**
   * Sets the display property to `inline-flex`.
   */
  inline: PropTypes.bool,

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

/**
 * Hoc
 */
export function layout (ComposedComponent) {

  function Layout ({
    align,
    alignContent,
    alignSelf,
    flex,
    flow,
    grow,
    inline,
    shrink,
    style,
    ...other
  }) {
    const styles = createStyleFromProps({
      align,
      alignContent,
      alignSelf,
      flex,
      flow,
      grow,
      inline,
      shrink
    });

    if (style) {
      Object.assign(styles, style);
    }

    return React.createElement(ComposedComponent, { style: styles, ...other });
  }

  return Layout;
}

export default layout(props => <div {...props} />);
