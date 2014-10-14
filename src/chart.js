// LOADS 2nd

/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
var chart = nv.models.lineChart()
                 .margin({left: 50})  //Adjust chart margins to give the x-axis some breathing room.
                 .useInteractiveGuideline(false)  //We want nice looking tooltips and a guideline!
                 .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                 .showYAxis(true)        //Show the y-axis
                 .showXAxis(true);        //Show the x-axis

chart.yDomain([0, 100]).xDomain([0, 250]);

var renderChart = function(tick) {
  d3.select('.chartSVG')    //Select the <svg> element you want to render the chart in.   
    .datum(myData)         //Populate the <svg> element with chart data...
    .transition().duration(10)
    .call(chart);          //Finally, render the chart!

  nv.utils.windowResize(function() { chart.update() });
}; // end renderChart()


var updateMindWaveData = function(tick) { // called in renderChart  
  $.get('http://127.0.0.1:3000', function(data) {
    mindWave.meditation.push( {x: tick, y: data.eSense.meditation} );
    mindWave.attention.push( {x: tick, y: data.eSense.attention} );
    mindWave.blinks.push( {x: tick, y: data.blinkStrength} ); 
  }); // end get()
};


var updateChartData = function() { // called in updateChart
  myData = [{
      values: mindWave.meditation,
      key: '\'Meditation\'',
      color: '#2ca02c'
    },{
      values: mindWave.attention,      //values - represents the array of {x,y} data points
      key: '\'Attention\'', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    }]; // end data array
}; // updateChartData


var updateFinalChartData = function() { // called in updateChart
  myData = [{
      values: mindWave.meditation,
      key: '\'Meditation\'',
      color: '#2ca02c'
    },{
      values: mindWave.attention,      //values - represents the array of {x,y} data points
      key: '\'Attention\'', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },{
      values: mindWave.blinks,
      key: '\'Blinks\'',
      color: '#7777ff', // updater from fff to 000 (white to black)
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    }]; // end data array
}; // updateChartData


var initializeMindWave = function() { // initialize to empty
  mindWave.meditation = [];
  mindWave.attention = [];
  mindWave.blinks = [];
}; // end initializeMindWave()