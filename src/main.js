// Loads 4th

var initializeGuessPattern = function() {
  // connect to the headset
//   tgClient.connect();

  $('.startButton').hide()
  initializeMindWave(); // create 3 arrays and populate w/ 0
  mp3Player.html('<source src="mp3/sweep.wav" type="audio/wav">');
  playButton = document.getElementsByClassName("mp3Player");
  playButton = playButton[0];
  updatePageData(); // update HTML data
  stopwatch();
}; // immediate invocation

$('.startButton').on('click', function(e) {initializeGuessPattern();}) // begin everything


/*
      LIST OF FUNCTIONS:
  pageData
updatePageData
randInt
randPct

  chart
renderChart
updateMindWaveData
updateChartData
initializeMindWave

  stopwatch
stopwatch
renderStopwatch
renderBlinks

  main
initialize
*/

/*
    NEUROSKY Output Object:
{ 
  eSense: { 
    attention: 53, 
    meditation: 47 
  },
  eegPower: { 
    delta: 416474,
    theta: 33592,
    lowAlpha: 3877,
    highAlpha: 3142,
    lowBeta: 1569,
    highBeta: 3125,
    lowGamma: 3521,
    highGamma: 1451 
  },
  poorSignalLevel: 0 
}
{ blinkStrength: 55 }
*/