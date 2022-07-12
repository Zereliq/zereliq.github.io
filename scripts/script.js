var acc = document.getElementsByClassName("acc-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-faq");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      for (i = 0; i < acc.length; i++){
        acc[i].nextElementSibling.style.maxHeight = null
      }
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function onScroll(){
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if(scrollTop > 0){
    var element = document.getElementById("nav");
    element.style.backgroundColor = "rgba(0,0,0,0%)"
  }
  else{
    var element = document.getElementById("nav");
    element.style.backgroundColor = "rgba(1,1,1,60%)"
  }
}
