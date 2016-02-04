import React, { Component, PropTypes } from 'react';

const propTypes = {

  /**
   * Controls child flex alignment using `justify-content` and `align-items`.
   * The prop accepts a string with 2 (optional) parts in the following format:
   *
   * "`start|center|end|space-around|space-between` `start|center|end|stretch`"
   */
  align: PropTypes.string,

  /**
   * Sets `flex-basis`, `flex-grow` and `flex-shrink` to determine the space the layout component occupies.
   *
   * @val {bool} true Will grow and shrink as needed. Starts with a size of 0%. Same as flex="0".
   * @val {number} 0..100 Will grow and shrink as needed. Starts with a size of `n`%.
   * @val {string} "none" Will not grow or shrink. Sized based on it's width and height values.
   * @val {string} "initial"  Will shrink as needed. Starts with a size based on it's width and height values.
   * @val {string} "auto" Will grow and shrink as needed. Starts with a size based on it's width and height values.
   * @val {string} "grow" Will grow and shrink as needed. Starts with a size of 100%. Same as flex="100".
   * @val {string} "nogrow" Will shrink as needed, but won't grow. Starts with a size based on it's width and height values.
   * @val {string} "noshrink" Will grow as needed, but won't shrink. Starts with a size based on it's width and height values.
   */
  flex: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ])


};

/**
 *
 */
const Parent = props => (
  <div>woof</div>
);

Parent.propTypes = propTypes;

export default Parent;
