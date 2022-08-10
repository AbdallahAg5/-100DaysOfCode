btn=document.querySelector('.btn')

btn.addEventListener('click',function(){
    var color1=document.getElementById('firstcolor')
    var color2=document.getElementById('secondcolor')
    var result=document.getElementById('result')
    result.style.backgroundImage=`linear-gradient(45deg ,${color1.value},${color2.value})`

})