$(document).ready(function(){
    $('#comment').click(function(){
        let input=$('#text').val()
       $('.box').slideDown()
       $('.space').append(input + '<br>')
    });

    $('#del').click(function(){
       $('.box').slideUp()
       $('.space').text('')
    });


    $('#clear').click(function(){
           $('#text').val('')
    

    });




   })