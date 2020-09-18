"use strict";

module.exports = (arr: any) => (key: any) =>
  arr.filter((a: any[]) => a[0] === key);
