'use strict';

import { readFileSync } from 'fs';
import { RESULTS_FILE }  from '../constants';

const rawResults = readFileSync(RESULTS_FILE);
const results = JSON.parse(rawResults);

export function getWinnerByCounty(event, context, callback) {
    let countyWinner = { 'test county': 100 }

    return callback(null, {
        statusCode: 200,
        body: countyWinner
    });
}

export function getWinnerByState(event, context, callback) {
    let countyWinner = { 'test state': 100 }

    return callback(null, {
        statusCode: 200,
        body: countyWinner
    });
}

export function getWinnerOverall(event, context, callback) {
    let countyWinner = { 'test overall': 100 }

    return callback(null, {
        statusCode: 200,
        body: countyWinner
    });
}