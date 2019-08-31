#!/usr/bin/env node
"use strict";
var xkcd = require('../lib/xkcd/api');
// import * as xkcd from '../lib/xkcd/api';
var f = new xkcd.DefaultApi();
console.log(f.xkcdGetComicForToday());
f.xkcdGetComicForToday().then(function (r) {
    console.log(r);
});
f.xkcdGetComicForToday().then(function (x, y) {
    console.log(x, y);
});
