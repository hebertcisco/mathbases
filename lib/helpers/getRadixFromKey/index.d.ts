"use strict";

const {
  BASE_MAP,
  BASE_MAP_INDEX_RADIX,
} = require("../../constants/index.d.ts");

const find = require("../find/index.d.ts"),
  head = require("../head/index.d.ts");

module.exports = (key: any) => head(find(BASE_MAP)(key))[BASE_MAP_INDEX_RADIX];
