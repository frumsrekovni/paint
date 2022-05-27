const body = document.getElementsByTagName("body") as HTMLCollectionOf<HTMLBodyElement>;
const canvas = document.getElementById("drawingArea") as HTMLCanvasElement;
const context = canvas.getContext("2d");
let leftMousebtnPressed:boolean = false;


body[0].addEventListener("mouseup", () => {
    leftMousebtnPressed = false;
});

body[0].addEventListener("mousedown", () => {
    leftMousebtnPressed = true;
});


canvas.addEventListener("mousemove", (mouseEvent) => {
    if(leftMousebtnPressed){
        const x:number = mouseEvent.offsetX; // If you use just X here the point of the mouse is where the left corner of the circle is drawn instead of the center
        const y:number = mouseEvent.offsetY;
        drawCircle(x,y);
    }
    
});

function drawCircle(x, y){
    context.beginPath();
    context.arc(x,y,5,0,Math.PI*2);
    context.fill();
}