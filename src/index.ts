import constants from './constants';
import { head, xProd, getRadixFromKey, makeConversionFunction } from './helpers';

const allYour = (baseFrom: string | string[]) => ({
  areBelongTo: (baseTo: string | string[]) => (value: string) => {
    return parseInt(value, getRadixFromKey(baseFrom.slice(0, 3))).toString(getRadixFromKey(baseTo.slice(0, 3)));
  },
});

const baseKeys = constants.BASE_MAP.map(head),
  baseKeyPairs = xProd(baseKeys, baseKeys),
  quickMethods = baseKeyPairs.map(makeConversionFunction);

export default Object.assign({}, { allYour }, ...quickMethods);
