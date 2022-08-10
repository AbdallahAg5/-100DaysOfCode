function changeColor(){
    let input=document.getElementById("text").value
    let p=document.getElementById('para')
    p.style.color=input
    document.getElementById("text").value=''
}



function fontSize(){
    let input=document.getElementById('text2').value
    let p=document.getElementById('para')
    p.style.fontSize=input
}



function BgColor(){
    let input=document.getElementById('text3').value
    let div=document.getElementById('div')
    div.style.backgroundColor=input
}

function Style(){
    let p=document.getElementById('para')
    let input=document.getElementById('text4').value
    p.style.fontStyle=input
}

function Remove(){
   let p=document.getElementById('para')
   let div=document.getElementById('div')
   div.style.backgroundColor='rgb(153, 160, 167)'
   p.style.fontSize='16px'
   p.style.fontWeight='normal'
   p.style.fontStyle='normal'
   p.style.color='black'
    
   
   
}