# Math Bases

**All Your Base Are Belong To Us**

[![Build Status](https://travis-ci.org/hebertcisco/mathbases.svg?branch=master)](https://travis-ci.org/hebertcisco/mathbases) [![npm version](http://img.shields.io/npm/v/mathbases.svg)](https://npmjs.org/package/mathbases) [![Dependency Status](https://david-dm.org/hebertcisco/mathBases.svg)](https://david-dm.org/hebertcisco/mathbases) 

```
parseInt(myValue, baseFrom).toString(baseTo)
```

## Install

```
$ npm install mathbases --save
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
