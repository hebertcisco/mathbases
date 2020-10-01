"use strict";

const { BASE_MAP } = require("./constants/index.d.ts");

const head = require("./helpers/head/index.d.ts"),
    xProd = require("./helpers/xProd/index.d.ts"),
    getRadixFromKey = require("./helpers/getRadixFromKey/index.d.ts"),
    makeConversionFunction = require("./helpers//makeConversionFunction/index.d.ts");

const allYour = (baseFrom: any) => ({
    areBelongTo: (baseTo: any) => (value: any) => {
        return parseInt(value, getRadixFromKey(baseFrom.slice(0, 3))).toString(
            getRadixFromKey(baseTo.slice(0, 3))
        );
    },
});

const baseKeys = BASE_MAP.map(head),
    baseKeyPairs = xProd(baseKeys, baseKeys),
    quickMethods = baseKeyPairs.map(makeConversionFunction);

module.exports = Object.assign({}, { allYour }, ...quickMethods);
