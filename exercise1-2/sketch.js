class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
        
    isInBounds(boxX, boxY, boxWidth, boxHeight) {
        return (
            this.x >= boxX &&
            this.x <= boxX + boxWidth &&
            this.y >= boxY &&
            this.y <= boxY + boxHeight 
        );
    }
}

let boxX = 50, boxY = 75, boxW = 300, boxH = 250; 

function setup() {
    createCanvas(400, 400);
    background(220);
    noStroke();

    stroke(0);
    strokeWeight(2);
    noFill();
    rect(boxX, boxY, boxW, boxH);
}

function draw() {
}

function mousePressed(){
    let mouseCoord = new Coordinate(mouseX, mouseY);
    if (mouseCoord.isInBounds(boxX, boxY, boxW, boxH)) {
        let randX = random(boxX, boxX + boxW);
        let randY = random(boxY, boxY + boxH);

        noStroke();
        fill(random(255), random(255), random(255), 180);
        ellipse(randX, randY, random(20, 60), random(20, 60))
    } else {
        console.log('Clicked outside the box - no ellipse drawn.')
    }
}