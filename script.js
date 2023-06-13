const canvas=document.getElementById("canvas");
canvas.width=window.innerWidth-60;
canvas.height=400;
//save_img=document.querySelector("#save-img");
let context=canvas.getContext("2d");
let startbackcolor="white"
context.fillStyle=startbackcolor;
context.fillRect(0,0,canvas.width,canvas.height);


let draw_color="black";
let draw_width="2";
let is_drawing=false;
canvas.addEventListener("touchstart",start,false);
canvas.addEventListener("touchmove",draw,false);
canvas.addEventListener("mousedown",start,false);
canvas.addEventListener("mousemove",draw,false);
canvas.addEventListener("touchend",stop,false); 
canvas.addEventListener("mouseup",stop,false);
canvas.addEventListener("mouseout",stop,false);
function clear_canvas(){
context.fillStyle=startbackcolor;
context.clearRect(0,0,canvas.width,canvas.height);
context.fillRect(0,0,canvas.width,canvas.height);
}
function change_color(element){
    draw.color=element.Style.background;
}
function start(event){
    is_drawing=true;
    context.beginPath();//starts a newpath called before beginning new line so that they may be of different color
    context.moveTo(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop);
    //to move to specific coordinate client->outputs the coordinates of mouse pointer
    
    event.preventDefault();

}
function draw(event){
    if(is_drawing){
        context.lineTo(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop);
        context.strokeStyle=draw_color;
        context.lineWidth=draw_width;
        context.lineCap="round";
        context.lineJoin="round";
        context.stroke();
    }
}

function stop(event){
    if(is_drawing){
  context.stroke();
  context.closePath();
  is_drawing=false;
    }
    event.preventDefault();
}
function save(){
    const link=document.createElement("a");
    link.download=`${Date.now()}.jpg`;
    link.href=canvas.toDataURL();
    link.click();
}