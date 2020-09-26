"use strict";

const head = require("../head/index.d.ts"),
  ensureUniquePair = require("../ensureUniquePair/index.d.ts");

module.exports = (xs: any, ys: any) => {
  let a = [];
  xs.map((x: any) => ys.map((y: any) => a.push(ensureUniquePair(x)(y))));
  return a.filter(head);
};
