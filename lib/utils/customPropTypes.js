import { childAlignmentRegExp } from './validate';
import { ALIGNMENT_MAIN_AXIS } from '../constants';

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

  if (!childAlignmentRegExp.test(value.trim())) {
    return new Error(`value '${value.trim()}' for ${propName} value in ${componentName} invalid`);
  }

  return null;
}

export function contentAlignment (props, propName, componentName = 'Anonymous') {
  const value = props[propName];

  if (!value) {
    return null;
  }

  if (typeof value !== 'string') {
    return new Error(`expected a string for ${propName} in ${componentName}`);
  }

  if (ALIGNMENT_MAIN_AXIS.indexOf(value.trim()) === -1) {
    return new Error(`value '${value.trim()}' for ${propName} value in ${componentName} invalid`);
  }

  return null;
}
