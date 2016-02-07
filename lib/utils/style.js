import _reduceRight from 'lodash/reduceRight';
import _transform from 'lodash/transform';
import _isUndefined from 'lodash/isUndefined';

/**
 * @module utils/style
 */

export function createStyleFromProps (props, base = {}) {

  const style = _reduceRight(props, (result, val, prop) => {

    if (typeof val !== 'undefined' && propFns[prop]) {
      Object.assign(result, propFns[prop](val));
    }

    return result;
  }, base);

  if (
    _isUndefined(style.flex) && (
      !_isUndefined(style.flexBasis) ||
      !_isUndefined(style.flexGrow) ||
      !_isUndefined(style.flexShrink)
    )
  ) {
    return mergeFlexProps(style);
  }

  return style;
}

export function mergeFlexProps (style) {
  const { flexGrow, flexShrink, flexBasis, ...rest } = style;

  rest.flex = [
    _isUndefined(flexGrow) ? 0 : flexGrow,
    _isUndefined(flexShrink) ? 1 : flexShrink,
    _isUndefined(flexBasis) ? 'auto' : typeof flexBasis === 'number' ? `${flexBasis}%` : flexBasis
  ].join(' ');

  return rest;
}

export const propFns = {
  align,
  alignContent,
  flex,
  flow,
  grow,
  inline,
  shrink
};

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

function flex (val) {
  const type = typeof val;

  if (type === 'boolean') {
    if (val) {
      return { flexBasis: 'auto' };
    }

    return { flexBasis: 'auto', flexShrink: 0 };
  } else if (type === 'number') {
    return { flexBasis: val };
  } else if (type === 'string') {
    if (val === 'auto') {
      return { flexBasis: 'auto' };
    }
    return { flex: val };
  }
}

function grow (val) {
  if (val === false) val = 0; // eslint-disable-line no-param-reassign
  if (val === true) val = 1; // eslint-disable-line no-param-reassign

  return { flexGrow: val };
}

function shrink (val) {
  if (val === false) val = 0; // eslint-disable-line no-param-reassign
  if (val === true) val = 1; // eslint-disable-line no-param-reassign

  return { flexShrink: val };
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
