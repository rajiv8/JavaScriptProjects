let newYears;
let timerStarts;

let appHeading=document.getElementById("heading");
appHeading.innerText="";



function countDown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    
    let totalSeconndsLeft = (newYearDate - currentDate) / 1000;
    const daysLeft = Math.floor(totalSeconndsLeft / 3600 / 24);
    const hoursLeft = Math.floor(totalSeconndsLeft /3600)%24;
    const minutesLeft = Math.floor(totalSeconndsLeft /3600)%60;
    const secondsLeft = Math.floor(totalSeconndsLeft)%60;
    
    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
    
    document.getElementById("days").innerText = `${daysLeft}`;
    document.getElementById("hours").innerText = format(`${hoursLeft}`);
    document.getElementById("minutes").innerText = format(`${minutesLeft}`);
    document.getElementById("seconds").innerText = format(`${secondsLeft}`);
    
    document.getElementById("containerBody").addEventListener("mouseover",function(){
        document.getElementById("containerBody").style.background="white";
        document.getElementById("containerBody").style.color="black";
    })
    document.getElementById("containerBody").addEventListener("mouseout",function(){
        document.getElementById("containerBody").style.background="black";
        document.getElementById("containerBody").style.color="white";
    })
    
    
}

function format(time){
    return time<10? (`0${time}`):time;
}

// function for setting the user input date
function setDate(){
    const dte = document.getElementById("setdate");
    const input = dte.value;
    const settingdate= new Date(input);

    newYears=settingdate;

    // countdown starts
    if(!timerStarts ){
        timerStarts=setInterval(countDown, 1000);       
        appHeading.innerText="CountDown Started"
    }
    
}

//function to stop timer
function stopTime(){
    if(timerStarts){
        clearInterval(timerStarts);
        timerStarts=null;
        newYears=null;
        appHeading.innerText="CountDown Stopped"

        setTimeout(function(){
            appHeading.innerText="";
        },5000);
        document.getElementById("days").innerText = "";
        document.getElementById("hours").innerText = "";
        document.getElementById("minutes").innerText = "";
        document.getElementById("seconds").innerText = "";

    }
    
}

// event to start the timer when user click set
document.getElementById("btnSet").addEventListener("click",setDate,false)
// event to start the timer when user click set
document.getElementById("btnStop").addEventListener("click",stopTime,false)