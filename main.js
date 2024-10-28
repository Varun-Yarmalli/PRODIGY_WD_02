const playButton =document.getElementsByClassName("play")[0];
const lapButton =document.getElementsByClassName("lap")[0];
const ResetButton =document.getElementsByClassName("Reset")[0];
const clearButton =document.getElementsByClassName("lap-clear-button")[0];
const minute =document.getElementsByClassName("minute")[0];
const second =document.getElementsByClassName("sec")[0];
const centisecond =document.getElementsByClassName("msec")[0];
const laps =document.getElementsByClassName("laps")[0];
const bg =document.getElementsByClassName("outer-circle")[0];
let isplay=false;
let secCounter=0;
let min;
let minCounter=0;
let sec;
let centisec;
let centiCounter =0;
let isReset=false;
let lapItem=0;
const toggleButton = ()=>{
    lapButton.classList.remove("hidden");
    ResetButton.classList.remove("hidden");
}
const play =()=>{
    if(!isplay && !isReset){
        playButton.innerHTML ="pause";
        bg.classList.add("animation-bg");
        min=setInterval(()=>{
            minute.innerHTML=`${++minCounter} :`;
      },60*1000);
        sec=setInterval(()=>{
            if(secCounter===60){
                secCounter=0;
            }
            second.innerHTML=`&nbsp;${++secCounter} :`;
      },1000);
        centisec=setInterval(()=>{
            if(centiCounter===100){
                centiCounter=0;
            }
        centisecond.innerHTML=`&nbsp;${++centiCounter}`;
        },10);
        isplay=true;
        isReset=true;
    }else{
        playButton.innerHTML="play";
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centisec);
        isplay=false;
        isReset=false;
        bg.classList.remove("animation-bg");
    }
    toggleButton();
}
const Reset =()=>{
    isReset=true;
    play();
    lapButton.classList.add("hidden");
    ResetButton.classList.add("hidden");
    minute.innerHTML='0 :'
    second.innerHTML='&nbsp;0 :'
    centisecond.innerHTML ='&nbsp;0';
}
const lap =()=>{
    const li=document.createElement("li");
    const number=document.createElement("span");
    const timestamp=document.createElement("span");

    li.setAttribute("class","lap-item");
    number.setAttribute("class","number");
    timestamp.setAttribute("class","time-stamp");
    number.innerText=`#${++lapItem}`;
    timestamp.innerHTML=`${minCounter} : ${secCounter} : ${centiCounter}`;
    li.append(number,timestamp);
    laps.append(li);
    clearButton.classList.remove("hidden");
}
const clearAll =()=>{
    laps.innerHTML='';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapItem=0;
}
playButton.addEventListener("click",play);
ResetButton.addEventListener("click",Reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",clearAll);

