$(document).ready(function(){
    $('.btn').click(function(){
        $('#search').text('Do not work now!!!' );   
    })
    $('.btn').dblclick(function(){
        $('#search').html('<h3>Sorry Do not work now!!!!!</h3>');   
    })
    $('#fadeOut').click(function(){
        $('#start').fadeOut();
    });
    $('#fadeIn').click(function(){
        $('#start').fadeIn();
    });
    $('#btn1').on('click', function(){
        $('#p1').hide();
    });
    $('#btn1-1').on('click', function(){
        $('#p1').show();
    });
    $('#btn1-2').on('click', function(){
        $('#p1').toggle();
    });
    $('#btn2').hover(function(){
        $('#p2').hide();
    });
    $('#btn2-1').on('mouseenter', function(){
        $('#p2').show();
    });
    $('#btn2-2').on('mouseleave', function(){
        $('#p2').toggle();
    });
    $('button.color').focus(function(){
        $(this).css('background', 'pink')
    });
    $('button.color').blur(function(){
        $(this).css('background', 'white')
    });
    $('#form').submit(function(e){
        e.preventDefault();
        var name = $('input#name').val();
        $("ol").append('<li>'+name+'</li>');
    });  $('ol').addClass('my_class');
    $('ol').after('<h3>Finish</h3>');
    $('ol').before('<p>Write all the name and submit</p>');

    $('#slideUp').click(function(){
        $('#end').slideUp('5000');
    });
    $('#slideDown').click(function(){
        $('#end').slideDown('5000');
    });
});
