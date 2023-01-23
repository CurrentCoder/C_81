canvas = document.getElementById("myCanvas");
color = red;


canvas.getContext("2d").beginpath();
canvas.getContext("2d").strokestyle = color;
canvas.getContext("2d").linewidth = 2;
canvas.getContext("2d").arc = (200, 200, 40, 0 , 2*Math.PI);
canvas.getContext("2d").stroke();

ctx = canvas.getContext("2d");
ctx.beginpath();
ctx.strokestyle = color;
ctx.linewidth = 2;
ctx.arc(200, 200, 40, 0 , 2*Math.PI);
ctx.stroke();

mouse_x= e.clientX
mouse_y= e.clientY

canvas.addEventListner("mousedown" , my_mousedown);


function my_mousedown(e)
{
   color = document.getElementById("color").value;
   console.log(color);

    
   mouse_x= e.clientX - canvas.offsetLeft;
   mouse_y= e.clientY - canvas.offsettop;

   console.log("X = " + mouse_x + " ,y=" + mouse_y);
   circle(mouse_x ,mouse_y)
}

function circle(mouse_x , mouse_y)
{
    
    ctx.beginpath();
    ctx.strokestyle = color;
    ctx.linewidth = 2;
    ctx.arc(mouse_x , mouse_y ,40, 0 , 2*Math.PI);
    ctx.stroke();    
}

