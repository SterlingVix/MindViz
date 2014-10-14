// LOADS 1st

var pageBody = $('body');
var pageScore = $('.score');
var timerDiv = $('.timerDiv');
var pageSlides = $('.slides');
var table = $('.table-main');
var scores = $('.score');
var graphSVG = $('.chartSVG');
// var mp3Player = this.getElementByID('mp3PlayerID');
var mp3Player = $('.mp3Player');
var playButton;

var magicToBeRenamed = $.get()

var mindWave = {};
var myData;

var timeLeft = 250;
var ticks = 0;
var ticks4 = 0;
var mp3Counter = 0;
var slideCounter = 0;

var pageH;
var pageW;
var tableH;
var tableW;
var slidesW;
var scoresW;
var mp3PlayerID;
var lastBlink = 0;

var updatePageData = function() {
  pageH = pageBody.height();
  pageW = pageBody.width();
  tableH = table.height();
  tableW = table.width();
  scoresW = tableH/4;
  slidesW = tableW - scoresW;
  pageSlides.width(slidesW);
  scores.width(scoresW);
};

updatePageData(); // to set all the HTML Page Data

var randInt = function() {
  return Math.floor((Math.random() * 100) + 1);
};

var randPct = function() {
  return Math.random();
};

var scoreAudio = [
  0,
  'mp3/C1.mp3',
  'mp3/D1.mp3',
  'mp3/E1.mp3',
  'mp3/F1.mp3',
  'mp3/G1.mp3',
  
  'mp3/A2.mp3',
  'mp3/B2.mp3',
  'mp3/C2.mp3',
  'mp3/D2.mp3',
  'mp3/E2.mp3',
  'mp3/F2.mp3',
  'mp3/G2.mp3',
  
  'mp3/A3.mp3',
  'mp3/B3.mp3',
  'mp3/C3.mp3',
  'mp3/D3.mp3',
  'mp3/E3.mp3',
  'mp3/F3.mp3',
  'mp3/G3.mp3',
  
  'mp3/A4.mp3',
  'mp3/B4.mp3',
  'mp3/C4.mp3',
  'mp3/D4.mp3',
  'mp3/E4.mp3',
  'mp3/F4.mp3',
  'mp3/G4.mp3',
  
  'mp3/A5.mp3',
  'mp3/B5.mp3',
  'mp3/C5.mp3',
  'mp3/D5.mp3',
  'mp3/E5.mp3',
  'mp3/F5.mp3',
  'mp3/G5.mp3',
  
  'mp3/A6.mp3',
  'mp3/B6.mp3',
  'mp3/C6.mp3',
  'mp3/D6.mp3',
  'mp3/E6.mp3',
  'mp3/F6.mp3',
  'mp3/G6.mp3',
  
  'mp3/A7.mp3',
  'mp3/B7.mp3',
  'mp3/C7.mp3',
  'mp3/D7.mp3',
  'mp3/E7.mp3',
  'mp3/F7.mp3',
  'mp3/G7.mp3'
]; // length = 54


var incrementScore = function() { // invoked in mindWave data getter function
  if (ticks > 8) { // after 8 seconds
    if (mindWave.blinks[ticks-1].y !== lastBlink) {
      lastBlink = mindWave.blinks[ticks-1].y

      if (lastBlink > 0) {
        mp3Player.html('<source src="' + scoreAudio[++mp3Counter] +'" type="audio/mpeg">');
        playButton.play();
      } else { playButton.pause(); }// call incrementScore()
    } else { playButton.pause(); } // and if (different blink)
  } // end if (after 8 seconds)




//   scores.on('click', function(e) {
//     mp3Player.html('<source src="' + scoreAudio[++mp3Counter] +'" type="audio/mpeg">');
//     playButton.play();
//   }); // end scores.on(click)
    
//     mp3Counter++;
//     if (catCounter < 8) {
//       var picLeft = 40 + ( (scoresW - 425) * randPct() );
//       var picTop = 35 + ( (tableH - 300) * randPct() );
//       scores.append('<img src="./img/' + catCounter + '.jpg" style="position: absolute; left: ' + picLeft + '; top: ' + picTop + ';">');
//       catCounter++;
//     } else { // end if()
//       var picLeft = 40 + ( (scoresW - 350) * randPct() );
//       var picTop = 70 + ( (tableH - 300) * randPct() );
//       scores.append('<img src="./img/nyan.gif" style="position: absolute; left: ' + picLeft + '; top: ' + picTop + ';">');
//     } // end else
}; // end incrementScore()
