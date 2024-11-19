setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    day=date.getDate();
    month=date.getMonth()+1;
    year=date.getFullYear();

    currDay=day+"-"+month+"-"+year;

    //  12hr = 360 deg , 1hr=30deg,60m=30deg,1m=1/2 deg,1 =m/2
    // therefor for x hour hr = 30*x + (m/2)
    hrotation = 30 * htime + htime / 2;
    //  60m=360deg,1=6deg*m
    mrotation = 6 * mtime;
    //  60s=360deg,1=6deg*s
    srotation = 6 * stime;
    

    //  hour.style.transform=`rotate(${hrotation}deg)`;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    // hour.style.background="red";
    // minute.style.background="green";
    // second.style.background="yellow";

    document.getElementById("cover").style.marginLeft="47.8%";
    document.getElementById("cover").style.marginTop="48%";
    document.getElementById("cover").style.opacity="1";


    dayDate.innerText=`${currDay}`;
    
    dayDate.style.fontSize="2vw";
    document.getElementById("dayDate").style.width="20%";
    document.getElementById("dayDate").style.height="5%";
    document.getElementById("dayDate").style.textAlign="center";
    document.getElementById("dayDate").style.marginTop="75%";
    document.getElementById("dayDate").style.marginLeft="40%";
    document.getElementById("dayDate").style.background="black";
    document.getElementById("dayDate").style.color="white";
    
    document.getElementById("black").innerText="Dark";
    document.getElementById("black").style.color="white";
    document.getElementById("black").style.fontSize="1vw";
    document.getElementById("black").style.background="black";
    document.getElementById("black").addEventListener("click",function(){
        document.body.style.background="black";
        
    })
    document.getElementById("white").innerText="Light";
    document.getElementById("white").style.color="black";
    document.getElementById("white").style.fontSize="1vw";
    document.getElementById("white").style.background="white";
    document.getElementById("white").addEventListener("click",function(){
        document.body.style.background="white";
    })
    
    
    // dark.style.fontSize="10vw";
    
    
}, 1000);






