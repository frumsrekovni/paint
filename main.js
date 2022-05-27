var body = document.getElementsByTagName("body");
var canvas = document.getElementById("drawingArea");
var context = canvas.getContext("2d");
var leftMousebtnPressed = false;
body[0].addEventListener("mouseup", function () {
    leftMousebtnPressed = false;
});
body[0].addEventListener("mousedown", function () {
    leftMousebtnPressed = true;
});
canvas.addEventListener("mousemove", function (mouseEvent) {
    if (leftMousebtnPressed) {
        var x = mouseEvent.offsetX; // If you use just X here the point of the mouse is where the left corner of the circle is drawn instead of the center
        var y = mouseEvent.offsetY;
        drawCircle(x, y);
    }
});
function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, 5, 0, Math.PI * 2);
    context.fill();
}
