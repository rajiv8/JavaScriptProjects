// constants and variables
let inputDir={x:0, y:0};
const foodSound=new Audio("../music/food.mp3");
const gameOverSound=new Audio("../music/gameover.mp3");
const moveSound=new Audio("../music/move.mp3");
const musicSound=new Audio("../music/music.mp3");
let speed=2;
let scoreVal=0;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
];

let food ={x:4,y:5};

// Game functions
function main(ctime){
    musicSound.play()
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    // console.log(ctime)
    gameEngine();

}

function isCollide(snake){
    // if snakes collides within itself
    for(let i=1;i<snakeArr.length;i++){
        if(snake[i].x ===snake[0].x && snake[i].y===snake[0].y ){
            return true;
        }
    }

    // if snakes collides with wall
    if(snake[0].x>=20 || snake[0].x<=0 || snake[0].y>=20 || snake[0].y<=0)
    {
        return true;
    }

}

function gameEngine(){
    // part 1: Updating the snake array & Food
    if(isCollide(snakeArr)){
        // snakeArr=[{x:13,y:15}];
        gameOverSound.play();
        musicSound.pause();
        inputDir={x:0, y:0};
        alert("Gave Over, Press any key to play Again!");
        snakeArr=[{x:13,y:15}];
        musicSound.play();
        speed=2;
        scoreVal=0;
        score.innerHTML="Score:"+scoreVal;
        level.innerHTML="Lvl:Bgnr";

    }
    // if snake has eaten food increament snake and replace the food position at new place
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        foodSound.play();
        scoreVal+=1;

        // increasing snake speed by 1 ,for every 2 score
        if(scoreVal%2==0 && scoreVal!=0)
        {
            speed+=1;
        }
        if(scoreVal>=10){
            level.innerHTML="Lvl:Intrmdt";
        }
        if(scoreVal>=20){
            level.innerHTML="Lvl:Advance";
        }

        score.innerHTML="Score:"+scoreVal;
        if(scoreVal>hiscoreval){
            hiscoreval=scoreVal
            localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML="H-Score:"+hiscoreval;

        }
        
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y}); 
        let a =2;
        let b=18;
        food ={x: Math.round(a+(b-a)*Math.random()), y:Math.round(a+(b-a)*Math.random())};
    }

    // move the snake 
    for (let i = snakeArr.length-2; i >=0; i--) {
        snakeArr[i+1]= {...snakeArr[i]} ;
    }
    snakeArr[0].x +=inputDir.x;
    snakeArr[0].y +=inputDir.y;

    // part 2: Display the snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index===0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // part 2: Display the food
    foodElement= document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}





// main logic

let hiscore = localStorage.getItem("hiscore");
if(hiscore===null)
{
    hiscoreval=0;
    localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
}
else{
    hiscoreval=JSON.parse(hiscore);
    hiscoreBox.innerHTML="H-Score:"+hiscoreval;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e =>{
    moveSound.play();
    inputDir={x:0,y:1};
    switch(e.key){
        case "ArrowUp":
            // console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            inputDir.x=0;
            inputDir.y=1;
            // console.log("ArrowDown");
            break;
        case "ArrowRight":
            inputDir.x=1;
            inputDir.y=0;
            // console.log("ArrowRight");
            break;
        case "ArrowLeft":
            // console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;
        default:
            break
    }
})