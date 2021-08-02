class BlackKey {
  constructor(distance, keyString, freq) {
    this.dist = distance;
    this.keyStr = keyString;
    this.freq = freq;
    this.isDown = false;
    this.osc = new p5.Oscillator("sawtooth");
    this.osc.freq(this.freq, 0.1);
    this.osc.amp(1, 0.1);
    this.ghostNotes = [];
    this.hold = {
      holding: false,
      start: 0,
      end: 0,
    };
  }
  draw(keyWidth, keyHeight) {
    fill(0);
    if (this.isDown) fill(255, 150, 0);
    stroke(100);
    strokeWeight(2);
    rect(
      this.dist * keyWidth + keyWidth - keyWidth / 4,
      keyHeight,
      keyWidth / 2,
      keyHeight / 2
    );
    fill(255);
    textSize(20);
    text(
      this.keyStr,
      this.dist * keyWidth + keyWidth - 10,
      windowHeight / 2 + keyHeight / 2 - 15
    );
  }
  update(keyWidth, keyHeight, keysArray) {
    this.isDown = false;
    for (let i = 0; i < keysArray.length; i++) {
      if (keysArray[i] === this.keyStr) {
        this.isDown = true;
        break;
      }
    }
    if (this.isDown) {
      if (
        this.ghostNotes.length === 0 ||
        this.ghostNotes[this.ghostNotes.length - 1].isHolding !== true
      ) {
        let note = new GhostNote(
          this.dist * keyWidth + (keyWidth / 4) * 3,
          windowHeight / 2,
          keyWidth / 2
        );
        this.ghostNotes.push(note);
      }
      this.osc.start();
    } else {
      if (this.ghostNotes.length > 0) {
        this.ghostNotes[this.ghostNotes.length - 1].isHolding = false;
      }
      this.osc.stop();
    }
    for (let i = 0; i < this.ghostNotes.length; i++) {
      this.ghostNotes[i].update();
    }
    this.draw(keyWidth, keyHeight);
  }
}
