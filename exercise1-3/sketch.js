class Button {
    constructor(x, y, width, height, label) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.label = label;
    } 
    draw() {
        if (this.#mouseIsOver()) {
            fill(0, 0, 255);
        } else {
            fill(0)
        }
        rect(this.x, this.y, this.width, this.height, 10);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(16);
        text(this.label, this.x + this.width / 2, this.y + this.height / 2);
        }

        #mouseIsOver() {
            return (
                mouseX >= this.x &&
                mouseX <= this.x + this.width &&
                mouseY >= this.y &&
                mouseY <= this.y + this.height
            );
        }

        clicked() {
            return this.#mouseIsOver() && mouseIsPressed;
        }
    }

let button;
let counter = 0;

function setup() {
    createCanvas(400, 300);
    textFont('Arial');
    button = new Button(140, 120, 120, 50, 'Punch me!');
}

function draw() {
    background(220);
    button.draw();
    fill(0);
    noStroke(0);
    textAlign(CENTER, TOP);
    textSize(16);
    text(`Punched ${counter} times`, width / 2, 200);
}

function mousePressed() {
    if (button.clicked()) {
        counter++;
    }
}