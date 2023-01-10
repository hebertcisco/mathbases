import last from '../last';
import getRadixFromKey from '../getRadixFromKey';
import head from '../head';

export default (pair: number[]) => {
  const baseFrom = getRadixFromKey(head(pair)),
    baseTo = getRadixFromKey(last(pair)),
    method = head(pair) + '2' + last(pair);

  return {
    [method]: (serotype: string) => parseInt(serotype, baseFrom).toString(baseTo),
  };
};
