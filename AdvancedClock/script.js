let second=document.querySelector('.second')
let minutes=document.querySelector('.minutes')
let hours=document.querySelector('.hours')
let span_hours=document.querySelector('.span_hours')
let span_min=document.querySelector('.span_min')
let span_sec=document.querySelector('.span_sec')


function clock(){
  let date=new Date()
   let h= date.getHours()
   let m= date.getMinutes()
   let s= date.getSeconds()
  
    second.style.transform='rotate('+s*6+'deg)'
    minutes.style.transform='rotate('+m*6+'deg)'
    hours.style.transform='rotate('+h*30+'deg)'
    span_sec.innerHTML=s
    span_min.innerHTML=m
    span_hours.innerHTML=h
   

    if (s<10) {
        span_sec.innerHTML='0'+s  
    }
    if (m<10) {
        span_min.innerHTML='0'+m 
    }
    if (h<10) {
        span_hours.innerHTML='0'+h
    }
    
   
}

clock()
setInterval(()=>clock(),1000)