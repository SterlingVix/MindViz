  // Loads 3rd

var stopwatch = function() {
  var context = this;

  if (timeLeft >= 0) {
    updateChartData(); // give data to chart
    updateMindWaveData(ticks);
    renderStopwatch(); // add timer and HTML data to screen
//     updateChartData();
    renderChart(ticks); // in chart.js
    incrementScore();  // check score

    timeLeft--;
    ticks++;
    setTimeout(function() {context.stopwatch();}, 1000); // setTimeout
  } else { // end if()
    updateFinalChartData();
    setTimeout(function() {
      renderChart(ticks); // in chart.js
    }, 12000); // setTimeout - 18000
  } // end else
} // end stopwatch()


var renderStopwatch = function() {
  timerDiv.append().html(
  '<h2 id="timer-display">' + Math.floor(timeLeft) + '</h2>');
  
  if (slideShow[ticks]) {
    pageSlides.append().html('<h3 id="currentSlide">' + slideShow[ticks] + '</h3>'); //   
  } // end if (append slides)
};   // end renderStopwatch()