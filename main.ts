const body = document.getElementsByTagName("body") as HTMLCollectionOf<HTMLBodyElement>;
const canvas = document.getElementById("drawingArea") as HTMLCanvasElement;
const context = canvas.getContext("2d");
let leftMousebtnPressed:boolean = false;
let posX:number = 0;
let posY:number = 0;
let brushSize:number = 10;

body[0].addEventListener("mouseup", () => {
    leftMousebtnPressed = false;
});

body[0].addEventListener("mousedown", (mouseEvent) => {
    drawCircle(mouseEvent.offsetX,mouseEvent.offsetY);
    leftMousebtnPressed = true;
    posX = mouseEvent.offsetX;
    posY = mouseEvent.offsetY;
});


canvas.addEventListener("mousemove", (mouseEvent) => {
    if(leftMousebtnPressed){
        const xx:number = mouseEvent.offsetX; // If you use just X here the point of the mouse is where the left corner of the circle is drawn instead of the center
        const yy:number = mouseEvent.offsetY;
        drawCircle(xx,yy);
        connectCircles(posX,posY,xx,yy);
        posX = xx;
        posY = yy;
    }
    
});

function drawCircle(x:number, y:number){
    context.beginPath();
    context.arc(x,y,brushSize,0,Math.PI*2);
    context.fill();
}

function connectCircles(x:number,y:number,xx:number,yy:number){
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(xx,yy);
    context.lineWidth = brushSize*2;
    context.stroke();
}