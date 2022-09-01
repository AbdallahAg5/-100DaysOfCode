function writee() {
    htmlcode=document.getElementById('htmlCode').value
    csscode=document.getElementById('cssCode').value
    jscode=document.getElementById('jsCode').value
    document.getElementById('viewer').srcdoc=htmlcode+'<style>'+csscode+'</style>'+'<sc'+'ript>'+jscode + '</sc'+'ript>'
   }


  