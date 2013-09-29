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

process.stdin.on('data', function (text) {
  var input = text.split();
  var elements = [];
  for (var symbol in input){
    for (var e in periodicTable.table) {
      if(periodicTable.table[e].symbol == input[symbol]){
          elements.push(periodicTable.table[e]);
          break;
      }
    }
  }
  console.log(elements);
  if (text === 'quit') {
    done();
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}
