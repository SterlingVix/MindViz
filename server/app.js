var express = require('express');
var app = express();
var nodeThinkGear = require('node-neurosky');

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

var currentData = {};
currentData.blinkStrength = 0; // {"blinkStrength":58}
var blinkStrength = 0; // {"blinkStrength":58}

// NeuroSky
var tgClient = nodeThinkGear.createClient({
  appName:'NodeThinkGear',
  appKey:'0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
});
console.log(tgClient);

tgClient.on('data',function(data){ // constantly check for current data
  if (data.blinkStrength) { // if blinking
    if (data.blinkStrength > 32) { // add blinkstrength to object
    blinkStrength = data.blinkStrength; // add current blinkStrength to data object
  } // end if(blinkStrength > 32)
  } else {
    currentData = data;
    currentData.blinkStrength = blinkStrength;
  }

// console.log(data);

});

tgClient.connect();

// express app
app.get('/', function(req, res){ // listen for this get ( '/' ) request, and send data
  
  console.log(currentData);
  res.send(currentData);
  blinkStrength = 0; // reset bS
});

app.listen(3000);




/*
//         ___ Data Format: ___

{ eSense: { attention: 48, meditation: 51 },
  eegPower:
   { delta: 18293,
     theta: 5224,
     lowAlpha: 892,
     highAlpha: 4135,
     lowBeta: 1215,
     highBeta: 3536,
     lowGamma: 1101,
     highGamma: 1555 },
  poorSignalLevel: 0 }
{ blinkStrength: 140 }
{ eSense: { attention: 35, meditation: 41 },
  eegPower:
   { delta: 233485,
     theta: 138936,
     lowAlpha: 16654,
     highAlpha: 7208,
     lowBeta: 2998,
     highBeta: 5517,
     lowGamma: 2124,
     highGamma: 1437 },
  poorSignalLevel: 0 }
{ blinkStrength: 140 }
*/