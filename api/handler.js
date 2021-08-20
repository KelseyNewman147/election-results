'use strict';

const fs = require('fs');
const constants = require('../constants');
const utils = require('../utils')

const { RESULTS_FILE } = constants;
const rawResults = fs.readFileSync(RESULTS_FILE);
const results = JSON.parse(rawResults);

module.exports = {
    getWinnerByCounty: (event, context, callback) => {
        let winners = [];
        for (const [state, counties] of Object.entries(results)) {
            let countyWinners = {};
            for (const [county, parties] of Object.entries(counties)) {
                
                let partyWinners = {};
                for (const [party, candidates] of Object.entries(parties)) {
                    // get the winner from each party in each county
                    const partyWinner = utils.getHighestFromObject(candidates);
                    partyWinners[partyWinner.candidate] = partyWinner.votes;
                }
                const countyWinner = utils.getHighestFromObject(partyWinners);
                // countyWinners[countyWinner.candidate] = countyWinner.votes;
                winners.push({ state, county, countyWinner });
            }
        }

        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(winners)
        });
    }, 
    getWinnerByState: (event, context, callback) => {
        let winner = { 'test state': 100 }

        return callback(null, {
            statusCode: 200,
            body: winner
        });
    },
    getWinnerOverall: (event, context, callback) => {
        let winner = { 'test overall': 100 }
        
        return callback(null, {
            statusCode: 200,
            body: winner
        });
    }
};