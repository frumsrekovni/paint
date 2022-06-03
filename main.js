const body = document.getElementsByTagName("body");
const canvas = document.getElementById("drawingArea");
const context = canvas.getContext("2d");
const colorpicker = document.getElementById("colorpicker");
const clearbtn = document.getElementById("clear");
const canvasSizebtn = document.getElementById("changesize");
let leftMousebtnPressed = false;
let posX = 0;
let posY = 0;
let brushSize = 10;
changeDrawingArea(window.innerWidth / 2, window.innerHeight / 2);
function changeDrawingArea(width, height) {
    canvas.width = width;
    canvas.height = height;
}
body[0].addEventListener("mouseup", () => {
    leftMousebtnPressed = false;
});
body[0].addEventListener("mousedown", (mouseEvent) => {
    drawCircle(mouseEvent.offsetX, mouseEvent.offsetY);
    leftMousebtnPressed = true;
    posX = mouseEvent.offsetX;
    posY = mouseEvent.offsetY;
});
canvas.addEventListener("mousemove", (mouseEvent) => {
    if (leftMousebtnPressed) {
        const xx = mouseEvent.offsetX; // If you use just X here the point of the mouse is where the left corner of the circle is drawn instead of the center
        const yy = mouseEvent.offsetY;
        drawCircle(xx, yy);
        connectCircles(posX, posY, xx, yy);
        posX = xx;
        posY = yy;
    }
});
canvas.addEventListener("wheel", (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta == -1) {
        brushSize++;
    }
    else if (delta == 1) {
        brushSize--;
        if (brushSize < 1) {
            brushSize = 1;
        }
    }
});
function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, brushSize, 0, Math.PI * 2);
    context.fill();
}
function connectCircles(x, y, xx, yy) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(xx, yy);
    context.lineWidth = brushSize * 2;
    context.stroke();
}
colorpicker.addEventListener("change", (chosenColor) => {
    context.fillStyle = chosenColor.target.value;
    context.strokeStyle = chosenColor.target.value;
});
clearbtn.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});
canvasSizebtn.addEventListener("click", () => {
    let width = parseInt(document.getElementById("canvaswidth").value);
    let height = parseInt(document.getElementById("canvasheight").value);
    changeDrawingArea(width, height);
});
