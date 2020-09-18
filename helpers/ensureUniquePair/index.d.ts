"use strict";

module.exports = (x: any) => (y: any) => (x !== y ? [x, y] : []);
