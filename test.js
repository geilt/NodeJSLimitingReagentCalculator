/*
var type = {
	liquid: {
		measurement: volume
	},
	solid: {
		measurement: moles
	}
};
var grams = '';

var molecularWeight = getMolecularWeight();

var moles = grams / molecularWeight;

var getMolecularWeight = function(key){	
	return molecularWeights[key];
};
var molecularWeights = {
	C: 'test'
};
*/


process.stdin.resume();
process.stdin.setEncoding('utf8');

var periodicTable = require('./periodictable.js');

var util = require('util');

process.stdin.on('data', function(text) {
	var input = text.replace(/(\r\n|\n|\r)/gm, "").split(/(?=[A-Z])/);
	var coefficient = 1;
	if (parseInt(input[0], 10) > 0) {
		coefficient = parseInt(input[0], 10);
		input.shift();
	}
	console.log(coefficient, input);
	return;
	var elements = [];
	for (var symbol in input) {
		loop2: for (var e in periodicTable.table) {
			console.log(periodicTable.table[e]);
			if (periodicTable.table[e].symbol == input[symbol]) {
				elements.push(periodicTable.table[e]);
				break loop2;
			}
		}
	}
	console.log(elements);
	if (text === 'quit') {
		done();
	}
	return;
});

function done() {
	console.log('Now that process.stdin is paused, there is nothing more to do.');
	process.exit();
}