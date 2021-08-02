class GhostNote {
    constructor(x, y, width) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, -8);
        this.size = createVector(width, 0);
        this.isHolding = true;
    }
    draw() {
        stroke(0)
        strokeWeight(2);
        fill(205,50, 0);
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
    }
    update() {
        this.pos.add(this.vel);
        if(this.isHolding) {
            this.size.sub(this.vel);
        }
        this.draw();
    }
}