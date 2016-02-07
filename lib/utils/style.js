import _reduceRight from 'lodash/reduceRight';
import _transform from 'lodash/transform';

/**
 * @module utils/style
 */

export function createStyleFromProps (props, base = {}) {

  return _reduceRight(props, (style, val, prop) => {

    if (typeof val !== 'undefined' && propFns[prop]) {
      Object.assign(style, propFns[prop](val));
    }

    return style;
  }, base);
}

export const propFns = { align, alignContent, flow, inline };

/**
 * Prop Functions
 */

function align (val) {
  const [ justifyContent, alignItems ] = val.split(' ');

  return transformStyles({ justifyContent, alignItems });
}

function alignContent (val) {
  return transformStyles({ alignContent: val });
}

function flow (val) {
  return { flexFlow: val };
}

function inline (val) {
  return { display: val ? 'inline-flex' : 'flex' };
}

/**
 * Prop function helpers
 */

function transformStyles (styles) {
  return _transform(styles, (result, val, cssProp) => {
    if (!val) {
      return;
    }

    switch (cssProp) {

      case 'alignItems':
      case 'justifyContent':
      case 'alignContent':
        if (val === 'start' || val === 'end') {
          result[cssProp] = `flex-${val}`;
        } else {
          result[cssProp] = val;
        }
        return;

      default:
        result[cssProp] = val;
        return;
    }

  }, {});
}
