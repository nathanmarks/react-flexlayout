import _reduceRight from 'lodash/reduceRight';
import _transform from 'lodash/transform';

/**
 * @module utils/style
 */

export function createStyleFromProps (props, base = {}) {

  return _reduceRight(props, (style, val, prop) => {

    if (propFns[prop]) {
      Object.assign(style, propFns[prop](val));
    }

    return style;
  }, base);
}

export const propFns = { align };

/**
 * Prop function helpers
 */
function transformStyles (styles) {
  return _transform(styles, (result, val, prop) => {
    if (!val) {
      return;
    }

    switch (prop) {

      case 'alignItems':
      case 'justifyContent':
      case 'alignContent':
        if (val === 'start' || val === 'end') {
          result[prop] = `flex-${val}`;
        } else {
          result[prop] = val;
        }
        return;

      default:
        return;
    }

  }, {});
}

/**
 * Prop Functions
 */

function align (val) {
  const [ justifyContent, alignItems ] = val.split(' ');

  return transformStyles({ justifyContent, alignItems });
}
