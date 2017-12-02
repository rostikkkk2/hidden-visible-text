document.getElementsByTagName("button")[0].addEventListener("click",
function() {
  this.text = document.getElementsByTagName('h2')[0];
  this.text.hidden == false ? this.text.hidden = true : this.text.hidden = false;
});
