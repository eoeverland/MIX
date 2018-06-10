$(document).ready(function(){
  var title = $("#faktaboks").text();
  $("#faktaboks").click(function(){
      $("#fakta").slideToggle();
      if($("#faktaboks").text() == title){
        $("#faktaboks").text("Skjul");
      } else {
        $("#faktaboks").text(title);
      };
  });
});


$(function(){  // $(document).ready shorthand
  $('#ingress').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('#ingress').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);
            }
        });
    });
});


var btn = $('.btn');
btn.addEventListener("click", function(){
  btn.click(function(){
    window.location.replace('index.html');
    console.log('click');
  });
})
