p1=document.querySelector('.p1')

document.body.addEventListener('keyup',function(e){
  if (e.keyCode==32) {
      p1.style.display='none'}
       writee()  })

     var i=0 
     var msj=`> Hello, My name is Abdallah 
> I'm a full stack developer
> I enjoy writing code _
`
   
     var speed=150
     function writee(){
       document.querySelector('.p2').innerHTML+=msj.charAt(i)
       i++
       setTimeout(writee,speed)
    }

      





 
