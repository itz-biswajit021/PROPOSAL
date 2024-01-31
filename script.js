$('input[type=checkbox]').change(function(){
   $('#envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
   $('#envelope').fadeOut(1800, function() {
         $('#card').css({'visibility':'visible'});
   });
});