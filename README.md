# Math Bases

**All Your Base Are Belong To Us**

[![Build Status](https://travis-ci.org/hebertcisco/mathBases.svg?branch=master)](https://travis-ci.org/hebertcisco/mathBases) [![npm version](http://img.shields.io/npm/v/mathBases.svg)](https://npmjs.org/package/mathBases) [![Dependency Status](https://david-dm.org/hebertcisco/mathBases.svg)](https://david-dm.org/hebertcisco/mathBases) [![Coverage Status](https://coveralls.io/repos/github/hebertcisco/mathBases/badge.svg?branch=master)](https://coveralls.io/github/hebertcisco/mathBases?branch=master)

```
parseInt(myValue, baseFrom).toString(baseTo)
```

## Install

```
$ npm install mathBases --save
```

Run the specs

```
$ npm test
```

## Usage

##### Using quick methods

```js
const base = require("mathBases");

base.dec2hex("42"); // '2a'
```

##### Using the master converter

```js
const { allYour } = require("mathBases");

allYour("decimal").areBelongTo("binary")(50); // '110010'
```

## Supported Bases

- [Binary](#Binary)
- [Ternary](#Ternary)
- [Quaternary](#Quaternary)
- [Quinary](#Quinary)
- [Senary](#Senary)
- [Septenary](#Septenary)
- [Octal](#Octal)
- [Nonary](#Nonary)
- [Decimal](#Decimal)
- [Undenary](#Undenary)
- [Duodecimal](#Duodecimal)
- [Hexadecimal](#Hexadecimal)
- [Vigesimal](#Vigesimal)