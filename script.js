document.getElementsByTagName("button")[0].addEventListener("click",
function() {
  this.text = document.getElementsByTagName('h2')[0];
  if (this.text.hidden == false) {
    this.text.hidden = true;
  }else{
    this.text.hidden = false;
  }
});
