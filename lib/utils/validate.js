import {
  ALIGNMENT_MAIN_AXIS,
  ALIGNMENT_CROSS_AXIS
} from '../constants';

const alignMain = ALIGNMENT_MAIN_AXIS.join('|');
const alignCross = ALIGNMENT_CROSS_AXIS.join('|');

export const childAlignmentRegExp = new RegExp(`^(${alignMain})(?:\\s(${alignCross}))?$`);
