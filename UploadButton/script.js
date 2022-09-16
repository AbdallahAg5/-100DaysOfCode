let input=document.querySelector('input')
input.addEventListener('change',function(){
    const reader=new FileReader()
    reader.addEventListener('load',function(){
        document.querySelector('.img').style.backgroundImage=`url(${reader.result})`
    })
    reader.readAsDataURL(this.files[0])
})