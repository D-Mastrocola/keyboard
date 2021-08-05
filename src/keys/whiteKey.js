class WhiteKey {
  constructor(distance, keyString, freq, wave) {
    this.dist = distance;
    this.keyStr = keyString;
    this.isDown = false;
    this.osc = new p5.Oscillator(freq, wave);
    this.osc.amp(0, 0.1);
    this.osc.start();
    this.ghostNotes = [];
    this.recording = {
      notes: [[0, 0]]
    }
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
      this.dist * keyWidth + keyWidth / 2 - 10,
      windowHeight - 40
    );
  }
  update(keyWidth, keyHeight, keysArray, rec, playback) {
    let currentTime = millis();
    this.isDown = false;
    for (let i = 0; i < keysArray.length; i++) {
      if (keysArray[i] === this.keyStr) {
        this.isDown = true;
        break;
      }
    }
    if(playback.is) {
      for(let i = 0; i < this.recording.notes.length; i++) {
        if(currentTime >= rec.end + playback.start)  {
          let playButton = document.getElementById('play-btn');
          playButton.style.backgroundColor = '#aaa';
          playback.is = false;
          break
        }
        if(this.recording.notes[i][0] + playback.start > currentTime) break;
        if(this.recording.notes[i][1] + playback.start > currentTime)  {
          this.isDown = true;
        }
      }
    }
    if (this.isDown) {
      if(rec.is && this.recording.notes[this.recording.notes.length - 1][1] !== '0') {
        let newNote = [millis(), '0'];
        this.recording.notes.push(newNote);
      }
      if (
        this.ghostNotes.length === 0 ||
        this.ghostNotes[this.ghostNotes.length - 1].isHolding !== true
      ) {
        let note = new GhostNote(
          this.dist * keyWidth,
          windowHeight / 2,
          keyWidth
        );
        this.ghostNotes.push(note);
      }

      //console.log(this.ghostNotes[this.ghostNotes.length-1])
      this.osc.amp(1, 0.1);
    } else {
      if(this.recording.notes[this.recording.notes.length - 1][1] === '0') this.recording.notes[this.recording.notes.length - 1][1] = millis();
      if (this.ghostNotes.length > 0) {
        this.ghostNotes[this.ghostNotes.length - 1].isHolding = false;
      }
      this.osc.amp(0, 0.1);
    }
    for (let i = 0; i < this.ghostNotes.length; i++) {
      this.ghostNotes[i].update();
    }
    this.draw(keyWidth, keyHeight);
  }
}
