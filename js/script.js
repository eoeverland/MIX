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
  const lenke = document.getElementById('link1');
  console.log(lenke);
});
