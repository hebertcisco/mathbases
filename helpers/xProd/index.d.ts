"use strict";

const head = require("../head"),
  ensureUniquePair = require("../ensureUniquePair");

module.exports = (xs: any, ys: any) => {
  let a = [];
  xs.map((x: any) => ys.map((y: any) => a.push(ensureUniquePair(x)(y))));
  return a.filter(head);
};
