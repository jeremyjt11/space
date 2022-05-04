canvas=document.getElementById('myCanvas');
ctx=canvas.getContext('2d'); 
Mars=['plaet.jpg','plaet3.jpg','planet_cool_!.jpg','planet_i_have_the_game.jpg'];
random1=Math.floor(Math.random()*4);
rover_width=100;
rover_height=90;
bg_img=Mars[random1]; 
rover_img='rover.png';
rover_x=10;
rover_y=10;

function add() {
    bg_imgtag = new Image();
    bg_imgtag.onload = uploadbg;
    bg_imgtag.src = bg_img;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src =rover_img;
}

function uploadbg () {
    ctx.drawImage(bg_imgtag , 0 , 0 , canvas.width, canvas.height);
}

function uploadrover () {
    ctx.drawImage(rover_imgtag, rover_x, rover_y , rover_width, rover_height);    
}



window.addEventListener('keydown', my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
     
        up();
        console.log('up');
    }
    if(keyPressed == '40'){
     
        down();
        console.log('down');
    }
    if(keyPressed == '37'){
     
        left();
        console.log('left');
    }
    if(keyPressed == '39'){
     
        right();
        console.log('right');
    }
}
 

function up() {
    if(rover_y >= 0){
        rover_y= rover_y - 10;
        console.log('when up arrow is pressed,x,y= '+ rover_x+rover_y);
        uploadbg();
        uploadrover();
    }
    
}
function down() {
    if(rover_y <= 500){
        rover_y= rover_y + 10;
        console.log('when up arrow is pressed,x,y= '+ rover_x+rover_y);
        uploadbg();
        uploadrover();
    }
    
}
function left() {
    if(rover_x >= 0){
        rover_x= rover_x - 10;
        console.log('when up arrow is pressed,x,y= '+ rover_x+rover_y);
        uploadbg();
        uploadrover();
    }
    
}
function right() {
    if(rover_x <= 700){
        rover_x= rover_x + 10;
        console.log('when up arrow is pressed,x,y= '+ rover_x+rover_y);
        uploadbg();
        uploadrover();
    }
    
}