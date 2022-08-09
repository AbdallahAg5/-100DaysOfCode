function time(){
    let date=new Date
    var hours=date.getHours()
    var mins=date.getMinutes()
    var secs=date.getSeconds()

   
    hour.innerHTML=hours
    sec.innerHTML=secs
    min.innerHTML=mins

        if (hours==0 ) {
        hour.innerHTML=hours+'0' }

        if ( mins==0 ) {
        min.innerHTML=mins+'0'}

        if ( secs==0) {
        sec.innerHTML=secs+'0' }

        if (secs<10) {
        sec.innerHTML='0'+secs}

        if (hours<10) {
        hour.innerHTML='0'+hours}

        
        if (mins<10) {
        min.innerHTML='0'+mins}
   }
    
    setInterval(() => {
       time()
    }, 1000);



    var hour=document.querySelector('.hour')        
    var min=document.querySelector('.min')          
    var sec=document.querySelector('.sec')    
    var git=document.querySelector('.git') 
    var btn=document.querySelector('.btn')
    var body=document.body
    btn.addEventListener('click',function(){
          if (btn.innerHTML== 'Dark Mode') {
              btn.innerHTML='Light Mode'
              body.style.backgroundColor='black'
              git.style.color='white'
              hour.style.boxShadow='2px 2px 3px white'
              sec.style.boxShadow='2px 2px 3px white'
              min.style.boxShadow='2px 2px 3px white'
          } else {
            btn.innerHTML= 'Dark Mode'
            body.style.backgroundColor='#c2b3b3'
            git.style.color='black'
            hour.style.boxShadow='2px 2px 3px black'
             sec.style.boxShadow='2px 2px 3px black'
             min.style.boxShadow='2px 2px 3px black'
          }
    })