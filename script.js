// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
//var pattern = [6, 2, 4, 3, 2, 1, 2, 4, 5, 6];
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var mistakes = 0;
let timer = null;
var timeGiven = 60;
var timeLeft = 0;

function patternFunction() {
  for(let i = 0; i < 6; i++) {
    pattern[i] = Math.floor(Math.random() * 7) + 1;
  }
}
function startGame(){
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  patternFunction();
  document.getElementById("startBtn").classList.add("hidden");  
  document.getElementById("stopBtn").classList.remove("hidden");
  timeGiven = 60;
  timeLeft = 0;
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  resetTime();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 599.3,
  6: 604.3
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
  tonePlaying = false;
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
  //context.resume()
  guessCounter = 0;
  clueHoldTime -= 100;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clearInterval(timer);
  timeLeft= timeGiven;
  timer = setInterval(time, 1000);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats! You did it!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    mistakes++;
    if (mistakes == 3) {
      loseGame();
    } else {
      alert("Guesses remaining: " + (3 - mistakes));
      playClueSequence();
    }
  }
  
}

function resetTime() {
  clearTimeout(timer);
  timeLeft= 0;
  document.getElementById("timer").innerHTML = "Time: 0s";
}

function time() {
  if (timeLeft > 0) {
    timeGiven--;
    document.getElementById("timer").innerHTML = "Time: " + timeGiven + "s";
  } else {
    loseGame();
  }
}
