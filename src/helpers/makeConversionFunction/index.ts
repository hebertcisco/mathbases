import last from '../last';
import getRadixFromKey from '../getRadixFromKey';
import head from '../head';

export default (pair: any) => {
  const baseFrom = getRadixFromKey(head(pair)),
    baseTo = getRadixFromKey(last(pair)),
    method = head(pair) + '2' + last(pair);

  return {
    [method]: (s: string) => parseInt(s, baseFrom).toString(baseTo),
  };
};
