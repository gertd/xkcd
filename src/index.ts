#!/usr/bin/env node

const xkcd = require('../lib/xkcd/api');
// import * as xkcd from '../lib/xkcd/api'; // NEED TPO FIGURE OUT WHY THIS FAILS THE LAST CALL

let f = new xkcd.DefaultApi();

console.log(f.xkcdGetComicForToday());

f.xkcdGetComicForToday().then((resp: any) => {
    console.log(resp);
});

f.xkcdGetComicForToday().then((resp: any, body: any) => {
    console.log(resp, body);
});