import { childAlignmentRegExp } from './validate';
import { ALIGNMENT_MAIN_AXIS, ALIGNMENT_CROSS_AXIS } from '../constants';

/**
 * @module utils/customPropTypes
 */

export function childAlignment (props, propName, componentName = 'Anonymous') {
  const value = props[propName];

  if (!value) {
    return null;
  }

  if (typeof value !== 'string') {
    return new Error(`expected a string for ${propName} in ${componentName}`);
  }

  if (!childAlignmentRegExp.test(value)) {
    return new Error(`value '${value}' for ${propName} value in ${componentName} invalid`);
  }

  return null;
}

export function contentAlignment (axis, props, propName, componentName = 'Anonymous') {
  const value = props[propName];

  if (!value) {
    return null;
  }

  if (typeof value !== 'string') {
    return new Error(`expected a string for ${propName} in ${componentName}`);
  }

  if (axis.indexOf(value) === -1) {
    return new Error(`value '${value}' for ${propName} value in ${componentName} invalid`);
  }

  return null;
}

export const mainAxisAlignment = contentAlignment.bind(null, ALIGNMENT_MAIN_AXIS);
export const crossAxisAlignment = contentAlignment.bind(null, ALIGNMENT_CROSS_AXIS);
