import mathBases from '../index';

import head from '../helpers/head';
import last from '../helpers/last';
import find from '../helpers/find';

import constants from '../constants';

const isQuickMethod = (s: string) => s !== 'allYour';
const METHOD = constants.BASE_MAP_INDEX_NAME;
const COMPARATOR = constants.BASE_MAP_INDEX_COMPARATOR;

const makeAssertion = (method: any) => {
  const pair = method.split('2'),
    from = head(find(constants.BASE_MAP)(head(pair))),
    to = head(find(constants.BASE_MAP)(last(pair)));

  it(`${from[METHOD]} are belong to ${to[METHOD]}`, () => {
    expect(mathBases[method](from[COMPARATOR])).toBe(to[COMPARATOR]);
  });

  it(`api allows conversion from ${from[METHOD]} to ${to[METHOD]}`, () => {
    expect(mathBases.allYour(from[METHOD]).areBelongTo(to[METHOD])(from[COMPARATOR])).toBe(to[COMPARATOR]);
  });

  return method;
};

describe('all your', () => {
  Object.keys(mathBases).filter(isQuickMethod).map(makeAssertion);
});
