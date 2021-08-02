class WhiteKey {
  constructor(distance, keyString, freq) {
    this.dist = distance;
    this.keyStr = keyString;
    this.freq = freq;
    this.isDown = false;
    this.osc = new p5.Oscillator('sine');
    this.osc.freq(this.freq, 0.1);
    this.osc.amp(1, 0.1);
  }
  draw(keyWidth, keyHeight) {
    fill(255);
    if (this.isDown) fill(255, 150, 0);
    stroke(100);
    strokeWeight(2);
    rect(this.dist * keyWidth, keyHeight, keyWidth, keyHeight);
    fill(0);
    textSize(40);
    text(
      this.keyStr,
      this.dist * keyWidth + keyWidth / 2 - 20,
      windowHeight - 40
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
    if(this.isDown)  {
        this.osc.start();
    } else {
        this.osc.stop();
    }
    this.draw(keyWidth, keyHeight);
  }
}
