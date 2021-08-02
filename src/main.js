let note = 440;
let waveType = "sine";
let highlightColor = "#30f";
let keysDown = [];
let keyboardString = {
  white: ["z", "x", "c", "v", "b", "n", "m", "q", "w", "e", "r", "t", "y", "u"],
  black: ["s", "d", " ", "g", "h", "j", " ", "2", "3", " ", "5", "6", "7", " "],
};
let keyboardNotes = {
  white: [
    523.25, 587.33, 659.25, 698.46, 783.99, 880.0, 987.77, 1046.5, 1174.66,
    1318.51, 1396.91, 1567.98, 1760.0, 1975.53,
  ],
};
let keyboard = [];
//create array with key objects
//Create white keys
for (let i = 0; i < keyboardString.white.length; i++) {
  let key = new WhiteKey(i, keyboardString.white[i], keyboardNotes.white[i]);
  keyboard.push(key);
}
let keyWidth;
let keyHeight;
let notesPlaying = [];
let osc;
function setup() {
  keyWidth = windowWidth / keyboardString.white.length;
  keyHeight = windowHeight / 2;
  
  let canvas = createCanvas(windowWidth, windowHeight);
  background(51);
}
function draw() {
  //keys
  /*for (let i = 0; i < keyboardString.white.length; i++) {
    drawWhiteKey(i, keyboardString.white[i]);
  }
  for (let i = 0; i < keyboardString.black.length; i++) {
    if (keyboardString.black[i] !== " ") drawBlackKey(i, keyboardString.black[i]);
  }*/
  for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].update(keyWidth, keyHeight, keysDown);
  }
}
function drawBlackKey(distance, string) {
  fill(0);
  noStroke(0);
  rect(
    distance * keyWidth + keyWidth - keyWidth / 4,
    keyHeight,
    keyWidth / 2,
    keyHeight / 2
  );
}
function drawWhiteKey(distance, string) {
  fill(255);
  stroke(100);
  strokeWeight(2);
  rect(distance * keyWidth, keyHeight, keyWidth, keyHeight);
}
function keyPressed() {
  console.log(key);
  keysDown.push(key)
}
function keyReleased() {
  console.log(key);
  for(let i = 0; i < keysDown.length; i++) {
    if(key === keysDown[i]) {
      keysDown.splice(i, 1);
    }
  }
  console.log(keysDown)
}
