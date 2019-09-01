#!/usr/bin/env node

import {DefaultApi} from '../lib/xkcd/api/DefaultApi';

let x = new DefaultApi();
x.xkcdGetComicForToday().then( v => {
    console.log(v.response, v.body);
});
