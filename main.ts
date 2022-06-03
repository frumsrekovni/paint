const body = document.getElementsByTagName("body") as HTMLCollectionOf<HTMLBodyElement>;
const canvas = document.getElementById("drawingArea") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const colorpicker = document.getElementById("colorpicker") as HTMLInputElement;
const clearbtn = document.getElementById("clear") as HTMLButtonElement;
const canvasSizebtn = document.getElementById("changesize") as HTMLButtonElement;
let leftMousebtnPressed:boolean = false;
let posX:number = 0;
let posY:number = 0;
let brushSize:number = 10;

changeDrawingArea(window.innerWidth/2, window.innerHeight/2);

function changeDrawingArea(width:number, height:number){
    canvas.width = width;
    canvas.height = height;
}

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

canvas.addEventListener("wheel", (event) => {
    const delta:number = Math.sign(event.deltaY);
    if(delta == -1){
        brushSize++;
    }
    else if(delta == 1){
        brushSize--;
        if(brushSize < 1){
            brushSize = 1;
        }
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
colorpicker.addEventListener("change", (chosenColor) => {
    context.fillStyle = (chosenColor.target as HTMLInputElement).value;
    context.strokeStyle = (chosenColor.target as HTMLInputElement).value;
});

clearbtn.addEventListener("click", () => {
    context.clearRect(0,0,canvas.width,canvas.height);
});

canvasSizebtn.addEventListener("click", () => {
    let width = parseInt((document.getElementById("canvaswidth") as HTMLInputElement).value);
    let height = parseInt((document.getElementById("canvasheight") as HTMLInputElement).value);
    changeDrawingArea(width,height);
});