    window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 490 || document.documentElement.scrollTop > 500) {
    
    document.getElementById("navbar").style.background = "linear-gradient(135deg, #f093fbee 0%, #f5576cee 100%)";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}