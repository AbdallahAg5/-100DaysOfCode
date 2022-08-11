var stopp=document.querySelector('.stop')
var start=document.querySelector('.start')
var reset=document.querySelector('.reset')
var second=document.querySelector('.second')
var millisecond=document.querySelector('.millisecond')
var milli=0
var sec=0
var Interval;


function time(){
    milli++ 
    if (milli<9) {
        millisecond.innerHTML="0"+milli
    } 
    if (milli>9) {
        millisecond.innerHTML=milli
    }
    if (milli>99) {
        sec++
        second.innerHTML=sec
        milli=0
        millisecond.innerHTML="0"+0
    }
    if (sec>9) {
        second.innerHTML=sec
    }

}


start.addEventListener('click',function(){
    Interval=setInterval(time,10)
 })


 
stopp.addEventListener('click',function(){
   clearInterval( Interval)
 })


reset.addEventListener('click',function(){
    millisecond.innerHTML='00'
    second.innerHTML='00'
  
}) 

