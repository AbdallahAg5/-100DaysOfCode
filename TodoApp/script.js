icon=document.querySelector('.icon')
icon.addEventListener('click',function(){
    ul=document.querySelector('.ul')
    text=document.querySelector('.text')
   
    if(text.value==''){
        text.style.cssText='border:2px solid red'
    }
    else{
        ul.innerHTML+=`<li>${text.value}  <i class="fa-solid fa-xmark x"  onclick='this.parentElement.remove()'></i></li>`
        text.style.cssText='border:2px solid $primary'
        text.value=''
    }

})







