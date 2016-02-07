import React, { PropTypes, Component } from 'react';
import { ALIGNMENT_MAIN_AXIS } from '../constants';
import PlainComponent from './PlainComponent';
// import { createStyleFromProps } from '../utils/style';

/**
 * Hoc
 */
export function CreateParent (ComposedComponent) {

  return class ParentComponent extends Component {

    static propTypes = {

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
      alignContent: PropTypes.oneOf(ALIGNMENT_MAIN_AXIS),

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

    render () {

      return <ComposedComponent {...this.props} />;
    }

  };
}

/**
 * Parent
 */
export default CreateParent(PlainComponent);
