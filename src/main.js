let note = 440;
let waveType = "triangle";
let highlightColor = "#30f";
let notes = {
  c: new p5.Oscillator(523.25, waveType),
  csharp: new p5.Oscillator(554.37, waveType),
  d: new p5.Oscillator(587.33, waveType),
  dsharp: new p5.Oscillator(622.25, waveType),
  e: new p5.Oscillator(659.25, waveType),
  f: new p5.Oscillator(698.46, waveType),
  fsharp: new p5.Oscillator(739.99, waveType),
  g: new p5.Oscillator(783.99, waveType),
  gsharp: new p5.Oscillator(830.61, waveType),
  a: new p5.Oscillator(880.0, waveType),
  asharp: new p5.Oscillator(932.33, waveType),
  b: new p5.Oscillator(987.77, waveType),
  c2: new p5.Oscillator(1046.5, waveType),
};
let notesPlaying = [];
let osc;
function setup() {
  //osc = new p5.Oscillator("sine");
  let canvas = createCanvas(windowWidth, windowHeight/2);
  background(51);
}
function draw() {}
function keyPressed() {
  console.log(keyCode);
  if (keyCode === 81) {
    note = notes.c.start();
    let displayNote = document.getElementById("c");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 50) {
    note = notes.csharp.start();
    let displayNote = document.getElementById("csharp");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 87) {
    note = notes.d.start();
    let displayNote = document.getElementById("d");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 51) {
    note = notes.dsharp.start();
    let displayNote = document.getElementById("dsharp");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 69) {
    note = notes.e.start();
    let displayNote = document.getElementById("e");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 82) {
    note = notes.f.start();
    let displayNote = document.getElementById("f");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 53) {
    note = notes.fsharp.start();
    let displayNote = document.getElementById("fsharp");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 84) {
    note = notes.g.start();
    let displayNote = document.getElementById("g");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 54) {
    note = notes.gsharp.start();
    let displayNote = document.getElementById("gsharp");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 89) {
    note = notes.a.start();
    let displayNote = document.getElementById("a");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 55) {
    note = notes.asharp.start();
    let displayNote = document.getElementById("asharp");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 85) {
    note = notes.b.start();
    let displayNote = document.getElementById("b");
    displayNote.style.backgroundColor = highlightColor;
  }
  if (keyCode === 73) {
    note = notes.c2.start();
    let displayNote = document.getElementById("c2");
    displayNote.style.backgroundColor = highlightColor;
  }
}
function keyReleased() {
  console.log(keyCode);
  if (keyCode === 81) {
    note = notes.c.stop();
    let displayNote = document.getElementById("c");
    displayNote.style.backgroundColor = "#fff";
  }
  if (keyCode === 50) {
    note = notes.csharp.stop();
    let displayNote = document.getElementById("csharp");
    displayNote.style.backgroundColor = "#000";
  }
  if (keyCode === 87) {
    note = notes.d.stop();
    let displayNote = document.getElementById("d");
    displayNote.style.backgroundColor = "#fff";
  }
  if (keyCode === 51) {
    note = notes.dsharp.stop();
    let displayNote = document.getElementById("dsharp");
    displayNote.style.backgroundColor = "#000";
  }
  if (keyCode === 69) {
    note = notes.e.stop();
    let displayNote = document.getElementById("e");
    displayNote.style.backgroundColor = "#fff";
  }
  if (keyCode === 82) {
    note = notes.f.stop();
    let displayNote = document.getElementById("f");
    displayNote.style.backgroundColor = "#fff";
  }
  if (keyCode === 53) {
    note = notes.fsharp.stop();
    let displayNote = document.getElementById("fsharp");
    displayNote.style.backgroundColor = "#000";
  }
  if (keyCode === 84) {
    note = notes.g.stop();
    let displayNote = document.getElementById("g");
    displayNote.style.backgroundColor = "#fff";
  }
  if (keyCode === 54) {
    note = notes.gsharp.stop();
    let displayNote = document.getElementById("gsharp");
    displayNote.style.backgroundColor = "#000";
  }
  if (keyCode === 89) {
    note = notes.a.stop();
    let displayNote = document.getElementById("a");
    displayNote.style.backgroundColor = "#fff";
  }
  if (keyCode === 55) {
    note = notes.asharp.stop();
    let displayNote = document.getElementById("asharp");
    displayNote.style.backgroundColor = "#000";
  }
  if (keyCode === 85) {
    note = notes.b.stop();
    let displayNote = document.getElementById("b");
    displayNote.style.backgroundColor = "#fff";
  }
  if (keyCode === 73) {
    note = notes.c2.stop();
    let displayNote = document.getElementById("c2");
    displayNote.style.backgroundColor = "#fff";
  }
}
