import _reduceRight from 'lodash/reduceRight';

export function createStyleFromProps (props, base = {}) {
  return _reduceRight(props, (style, val, prop) => {

    return style;
  }, base);
}
