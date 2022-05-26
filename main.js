var canvas = document.getElementById("drawingArea");
var context = canvas.getContext("2d");
canvas.addEventListener("mousemove", function (mouseEvent) {
    var x = mouseEvent.offsetX; // If you use just X here the point of the mouse is where the left corner of the circle is drawn instead of the center
    var y = mouseEvent.offsetY;
    drawCircle(x, y);
});
function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, 5, 0, Math.PI * 2);
    context.fill();
}
// function draw(){
//     context.clearRect(0,0,canvas.width,canvas.height);
//     requestAnimationFrame(draw);
// }
