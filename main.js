var body = document.getElementsByTagName("body");
var canvas = document.getElementById("drawingArea");
var context = canvas.getContext("2d");
var leftMousebtnPressed = false;
var posX = 0;
var posY = 0;
var brushSize = 10;
body[0].addEventListener("mouseup", function () {
    leftMousebtnPressed = false;
});
body[0].addEventListener("mousedown", function (mouseEvent) {
    drawCircle(mouseEvent.offsetX, mouseEvent.offsetY);
    leftMousebtnPressed = true;
    posX = mouseEvent.offsetX;
    posY = mouseEvent.offsetY;
});
canvas.addEventListener("mousemove", function (mouseEvent) {
    if (leftMousebtnPressed) {
        var xx = mouseEvent.offsetX; // If you use just X here the point of the mouse is where the left corner of the circle is drawn instead of the center
        var yy = mouseEvent.offsetY;
        drawCircle(xx, yy);
        connectCircles(posX, posY, xx, yy);
        posX = xx;
        posY = yy;
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
