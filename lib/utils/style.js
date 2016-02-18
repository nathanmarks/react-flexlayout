import _reduceRight from 'lodash/reduceRight';
import _transform from 'lodash/transform';
import _isUndefined from 'lodash/isUndefined';
import _memoize from 'lodash/memoize';

/**
 * @module utils/style
 */

export function createStyleFromProps (props) {

  const style = _reduceRight(props, (result, val, prop) => {

    if (typeof val !== 'undefined' && propFns[prop]) {
      Object.assign(result, propFns[prop](val));
    }

    return result;
  }, {});

  if (
    _isUndefined(style.flex) && (
      !_isUndefined(style.flexBasis) ||
      !_isUndefined(style.flexGrow) ||
      !_isUndefined(style.flexShrink)
    )
  ) {
    return mergeFlexProps(style);
  }

  if (
    _isUndefined(style.display) && (
      !_isUndefined(style.justifyContent) ||
      !_isUndefined(style.alignItems) ||
      !_isUndefined(style.flexFlow) ||
      !_isUndefined(style.alignContent)
    )
  ) {
    style.display = 'flex';
  }

  return style;
}

const styleReducer = _memoize(createStyleFromProps, (props) => {
  return Object.keys(props).sort().map(key => props[key]).join('');
});

export { styleReducer };

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

  return transformFlexAlign({ justifyContent, alignItems });
}

function alignContent (val) {
  return transformFlexAlign({ alignContent: val });
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

function transformFlexAlign (styles) {
  return _transform(styles, (result, val, cssProp) => {
    if (!val) {
      return;
    }

    if (val === 'start' || val === 'end') {
      result[cssProp] = `flex-${val}`;
      return;
    }

    result[cssProp] = val;
    return;
  }, {});
}
