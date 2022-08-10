function hi(){
    let span=document.getElementById('span')
    let button=document.getElementById('btn')
    if (span.style.display=='none') {
     button.value='Read Less'
     span.style.display='block'
    } else {
     button.value='Read More'
     span.style.display='none'
    }
}