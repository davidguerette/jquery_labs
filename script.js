$(document).ready(function() {
    $('#box-1').mouseenter(function(){
        $('#box-1').fadeTo('slow', 1);
    });

    $('#box-1').mouseleave(function(){
        $('#box-1').fadeTo('fast', 0.5);
    });

    $('#box-2').mouseenter(function(){
        $('#box-2').fadeTo('fast', 1);
    });

    $('#box-2').mouseleave(function(){
        $('#box-2').fadeTo('slow', 0.5);
    });
});
