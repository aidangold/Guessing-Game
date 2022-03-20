// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var length = 10;
var mistakes = 0;

function getRandomInt(max) {
 return Math.floor(Math.random() * Math.floor(max) + 1); // + 1 so we don't get 0
}

function startGame(){
  //initialize game variables
  mistakes = 0;
  pattern = [];
  for (var i =0; i < length; i ++) {
    pattern.push(getRandomInt(6));
  }
  console.log('pattern: ' + pattern);
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i])
    // set a timeout to play that clue
    clueHoldTime = clueHoldTime - 8
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

function loseGame(){
  if (mistakes == 3) {
    stopGame();
    alert("Looks like you're tonights big loser!");
  }
}

function winGame(){
  stopGame();
  alert("Congratulations, you won!");
}

  
function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //guess was correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //continues
        progress++;
        playClueSequence();
      }
    }else{
      //continues
      guessCounter++;
    }
  }else{
    mistakes++;
    loseGame();
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 440,
  3: 523.25,
  4: 587.33,
  5: 622.25,
  6: 698.46,
  7: 739.99
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)