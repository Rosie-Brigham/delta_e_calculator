var DeltaE = require('delta-e');

var color1 = {L: 36, A: 60, B: 41};
var color2 = {L: 100, A: 40, B: 90};

console.log(DeltaE.getDeltaE00(color1, color2));