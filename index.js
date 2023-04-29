let [milliseconds,seconds,minutes,hours]=[0,0,0,0];
let displaytime=document.getElementById("displaytime");
let timer=null;

function stopwatch(){
    milliseconds+=10;
    if (milliseconds==1000){
        milliseconds=0;
        seconds++;
    if (seconds==60){
        seconds=0;
        minutes++;
    if (minutes==60){
        minutes=0;
        hours++;
    }    
    }
}

    let h=hours <10? "0"+hours:hours;
    let m=minutes <10? "0"+minutes:minutes;
    let s=seconds <10? "0"+seconds:seconds;
    let ms=milliseconds <10? "00"+milliseconds:milliseconds <100? "0" +milliseconds:milliseconds;
    document.getElementById("displaytime").innerHTML=h+":"+m+":"+s+":"+ms;
}

document.getElementById("stopbtn").onclick = function()
{
 clearInterval(timer);
}

document.getElementById("startbtn").onclick = function()
{
if (timer !== null){clearInterval(timer);}
timer=setInterval(stopwatch,10)

}

document.getElementById("resetbtn").onclick = function()
{
clearInterval(timer);
[milliseconds,seconds,minutes,hours]=[0,0,0,0];
document.getElementById("displaytime").innerHTML="00:00:00:000";

}