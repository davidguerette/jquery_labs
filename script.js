$(document).ready(function() {
    $('.box.a').mouseenter(function(){
        $('.box.a').fadeTo('slow', 1);
    });
    $('.box.a').mouseleave(function(){
        $('.box.a').fadeTo('fast', 0.5);
    });

    $('.box.b').mouseenter(function(){
        $('.box.b').fadeTo('fast', 1);
    });
    $('.box.b').mouseleave(function(){
        $('.box.b').fadeTo('slow', 0.5);
    });

    $('.box.c').mouseenter(function(){
      $('.box.c').fadeTo('slow', 1);
    });

    $('.box,c').mouseleave(function(){
        $('.box.c').fadeTo('fast', 0.5);
    });

    $('.box.d').mouseenter(function(){
        $('.box.d').fadeTo('fast', 1);
    });
    $('.box.d').mouseleave(function(){
        $('.box.d').fadeTo('slow', 0.5);
    });

    $('.box.e').mouseenter(function(){
        $('.box.e').fadeTo('fast', 1);
    });
    $('.box.e').mouseleave(function(){
        $('.box.e').fadeTo('slow', 0.5);
    });
  });
