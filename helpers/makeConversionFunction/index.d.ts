"use strict";

const getRadixFromKey = require("../getRadixFromKey/index.d.ts"),
  head = require("../head/index.d.ts"),
  last = require("../last/index.d.ts");

module.exports = (pair: any) => {
  const baseFrom = getRadixFromKey(head(pair)),
    baseTo = getRadixFromKey(last(pair)),
    method = head(pair) + "2" + last(pair);

  return {
    [method]: (s: any) => parseInt(s, baseFrom).toString(baseTo),
  };
};
