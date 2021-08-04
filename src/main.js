let waveType = "triangle";
let highlightColor = "#30f";
let keysDown = [];
let keyboardString = {
  white: ["z", "x", "c", "v", "b", "n", "m", "q", "w", "e", "r", "t", "y", "u"],
  black: ["s", "d", " ", "g", "h", "j", " ", "2", "3", " ", "5", "6", "7", " "],
};
let recording = false;
let keyboardNotes = {
  white: [
    261.63,
    293.66,
    329.63,
    349.23,
    392.0,
    440.0,
    493.88,
    523.25,
    587.33,
    659.25,
    698.46,
    783.99,
    880.0,
    987.77,
    1046.5,
    1174.66,
    1318.51,
    1396.91,
    1567.98,
    1760.0,
    1975.53,
  ],
  black: [
    277.18,
    311.13,
    0,
    369.99,
    415.3,
    466.16,
    0,
    554.37,
    622.25,
    0,
    739.99,
    830.61,
    932.33,
    0,
    1108.73,
    1244.51,
    0,
    1479.98,
    1661.22,
    1864.66,
    0,
  ],
};
let keyboard = [];
//create array with key objects
//Create white keys
for (let i = 0; i < keyboardString.white.length; i++) {
  let key = new WhiteKey(
    i,
    keyboardString.white[i],
    keyboardNotes.white[i],
    waveType
  );
  keyboard.push(key);
}
for (let i = 0; i < keyboardString.black.length; i++) {
  if (keyboardString.black[i] !== " ") {
    let key = new BlackKey(
      i,
      keyboardString.black[i],
      keyboardNotes.black[i],
      waveType
    );
    keyboard.push(key);
  }
}
let keyWidth;
let keyHeight;
let notesPlaying = [];
let osc;
function setup() {
  keyWidth = windowWidth / keyboardString.white.length;
  keyHeight = windowHeight / 2;

  let canvas = createCanvas(windowWidth, windowHeight);
  background(0);
}
function draw() {
  background(0);
  //keys
  /*for (let i = 0; i < keyboardString.white.length; i++) {
    drawWhiteKey(i, keyboardString.white[i]);
  }*/

  for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].update(keyWidth, keyHeight, keysDown);
  }
}
function record() {
  let time = millis();
  for(let i = 0; i < keyboard.length; i++) {
    keyboard[i].record(time);
  }
}

function keyPressed() {
  getAudioContext().resume()
  keysDown.push(key);
}
function keyReleased() {
  for (let i = 0; i < keysDown.length; i++) {
    if (key === keysDown[i]) {
      keysDown.splice(i, 1);
    }
  }
}
