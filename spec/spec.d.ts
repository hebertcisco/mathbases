"use strict";

const mathBases = require("../index.d.ts");

const head = require("../helpers/head/index.d.ts"),
  last = require("../helpers/last/index.d.ts"),
  find = require("../helpers/find/index.d.ts");

const {
  BASE_MAP,
  BASE_MAP_INDEX_NAME: METHOD,
  BASE_MAP_INDEX_COMPARATOR: COMPARATOR,
} = require("../constans/index.d.ts");

const isQuickMethod = (s: any) => s !== "allYour";

const makeAssertion = (method: any) => {
  const pair = method.split("2"),
    from = head(find(BASE_MAP)(head(pair))),
    to = head(find(BASE_MAP)(last(pair)));

  it(`${from[METHOD]} are belong to ${to[METHOD]}`, () => {
    expect(mathBases[method](from[COMPARATOR])).toBe(to[COMPARATOR]);
  });

  it(`api allows conversion from ${from[METHOD]} to ${to[METHOD]}`, () => {
    expect(
      mathBases.allYour(from[METHOD]).areBelongTo(to[METHOD])(from[COMPARATOR])
    ).toBe(to[COMPARATOR]);
  });

  return method;
};

describe("all your", () => {
  Object.keys(mathBases).filter(isQuickMethod).map(makeAssertion);
});
