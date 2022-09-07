let color1=document.querySelector('.color1')
let color2=document.querySelector('.color2')
let color3=document.querySelector('.color3')
let copy=document.getElementById('copy')
let alfabets='ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
let empty=''
  
  let range=document.getElementById('range')
  let password=document.getElementById('password')
  let range_val=document.getElementById('range_val')
  range.addEventListener('input',function(){
      range_val.innerHTML=range.value
      password.value=''
  })


 
      
let btn=document.getElementById('btn')
btn.addEventListener('click',function(){
  password.value=''
  for (let i = 0; i < range.value; i++) {
      password.value+=alfabets[parseInt(Math.random()*alfabets.length)]}
      range_val.innerHTML=range.value
  })


  copy.addEventListener('click',function(){
        navigator.clipboard.writeText(password.value)
        if (password.value=='') {
          password.style.border='2px solid red'
       }
        else{
          copy.innerHTML='Copied'
          setTimeout(() => {copy.innerHTML='<i class="fa-sharp fa-solid fa-clipboard"></i>'}, 1000)
          password.style.border='2px solid green'
      }
  })

color1.addEventListener('click',function(){
     document.body.style.backgroundColor='rgb(226, 134, 12)'
})

color2.addEventListener('click',function(){
    document.body.style.backgroundColor='rgb(140, 12, 226)'
})

color3.addEventListener('click',function(){
    document.body.style.backgroundColor=' rgb(12, 33, 226)'
})