import React, { PropTypes } from 'react';
import { createStyleFromProps } from '../utils/style';

const propTypes = {

  /**
   * Controls child flex alignment using `justify-content` and `align-items`.
   * The prop accepts a string with 2 (optional) parts in the following format:
   *
   * "`start|center|end|space-around|space-between` `start|center|end|stretch`"
   */
  align: PropTypes.string,

  /**
   * This aligns a flex container's lines within
   * when there is extra space in the cross-axis.
   *
   * **Note:** this property has no effect
   * when there is only one line of flex items.
   */
  alignContent: PropTypes.oneOf([
    'start', 'end', 'center', 'stretch', 'space-around', 'space-between'
  ]),

  children: PropTypes.any,

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
  inline: PropTypes.bool

};

/**
 * Parent
 */
const Parent = props => (
  <div style={createStyleFromProps(props, { display: 'flex' })}>
    {props.children}
  </div>
);

Parent.propTypes = propTypes;

export default Parent;
