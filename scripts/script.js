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