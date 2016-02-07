import { childAlignmentRegExp } from './validate';

/**
 * @module utils/customPropTypes
 */

export function childAlignment (props, propName, componentName = 'Anonymous') {
  const value = props[propName];

  if (typeof value !== 'string') {
    return new Error(`expected a string for ${propName} in ${componentName}`);
  }

  if (!childAlignmentRegExp.test(value.trim())) {
    return new Error(`value '${value.trim()}' for ${propName} value in ${componentName} invalid`);
  }

  return null;
}
