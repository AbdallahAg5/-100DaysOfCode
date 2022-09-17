var body=document.querySelector('body')
var div=document.createElement('div')
var p=document.createElement('p')
var input=document.createElement('input')
var btn=document.createElement('input')
var innerDiv=document.createElement('div')

var t=['0',1,2,3,4,5,6,7,8,9,'-','+','*','/','.','']
body.appendChild(div)
div.appendChild(p)
div.appendChild(input)
div.appendChild(btn)
div.appendChild(innerDiv)
div.setAttribute('class','div1')
innerDiv.setAttribute('class','div2')
btn.setAttribute('type','button')
btn.setAttribute('value','Delete')
input.setAttribute('readonly','')
p.innerHTML=' '

t.map((element)=>{ var span=document.createElement('span')
                   innerDiv.appendChild(span)
                   span.innerHTML=element
                       
                   if (element=="") {
                    span.innerHTML="="
                    }

                   span.addEventListener('click',()=>{
                    input.value+=element
                     p.innerHTML=input.value
                        if (element=="") {
                        input.value= eval(input.value)
                        p.innerHTML=''
                          
                        }

                    spanSelect=document.querySelectorAll('span')
                     for (let i = 0; i < spanSelect.length; i++) {
                     
                      if (element=='+') {
                           spanSelect[11].style.pointerEvents='none'
                      }

                      if (element=='-') {
                          spanSelect[10].style.pointerEvents='none'
                      }

                      if (element=='/') {
                           spanSelect[13].style.pointerEvents='none'
                      }

                      if (element=='*') {
                        spanSelect[12].style.pointerEvents='none'
                      }

                      if (element=='.') {
                        spanSelect[14].style.pointerEvents='none'
                      }
                    
                      if (element=='0' || element==1 || element==2 || element==3 || element==4 || element==5 || element==6 || element==7 || element==8  || element==9  ) {
                        spanSelect[11].style.pointerEvents='auto'
                        spanSelect[12].style.pointerEvents='auto'
                        spanSelect[13].style.pointerEvents='auto'
                        spanSelect[10].style.pointerEvents='auto'
                        spanSelect[14].style.pointerEvents='auto'

                      }}})})


                      btn.addEventListener('click',()=>{input.value="" 
                                                        p.innerHTML=''})
  

               