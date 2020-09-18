"use strict";

const getRadixFromKey = require("../getRadixFromKey"),
  head = require("../head"),
  last = require("../last");

module.exports = (pair: any) => {
  const baseFrom = getRadixFromKey(head(pair)),
    baseTo = getRadixFromKey(last(pair)),
    method = head(pair) + "2" + last(pair);

  return {
    [method]: (s: any) => parseInt(s, baseFrom).toString(baseTo),
  };
};
