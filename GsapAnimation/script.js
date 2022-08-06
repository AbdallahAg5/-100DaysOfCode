timeline=gsap.timeline({default:{duration:2}})
timeline
       .from('#h1',{scale:0,opacity:0,ease:'circ'})
       .from('.p1',{y:'100%',opacity:0,ease:'power1.out' })  
 
  
       
       document.addEventListener('keyup',function(e){
    if (e.key == " " ||   e.code == "Space" || e.keyCode == 32 ) {
    timeline
          .to('#div',{x:'-10000%', css: {height:'0px'}, scale:0})
           document.querySelector('#p1').style.display='none'
           document.querySelector('#div').display='none'
    timeline
          .to('#div1',{x:'-100%'})
          .from('ul', {y:'-50vh' ,delay:0.3})
          .from('.h12',{opacity:0,scale:0,y:'200px' },'<0')
          .from('.p2',{opacity:0,scale:0, y:300},'<0.6')
          .to('#div2',{x:'-100%'})} 

  


})





 